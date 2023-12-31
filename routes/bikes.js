const express = require('express')
const router = express.Router()
const db = require('../db/index.js')
const checkLoggedIn = require('../middleware/checkLoggedIn')
const authoriseUser = require('../middleware/authorisedUser.js')


router.get('/bikes/new', checkLoggedIn, (req, res) => {

    res.render("new")
})

router.get('/bikes/:id', checkLoggedIn, (req, res) => {

    let sql = `SELECT * FROM bikes WHERE id = $1;`

    db.query(sql, [req.params.id], (err, dbRes) => {
        if (err) {
            console.log(err);
        }
        let bike = dbRes.rows[0]  //taking out the first item in the object
        res.render("show", { bike: bike })
    })

})

router.post('/bikes', checkLoggedIn, (req, res) => {

    let title = req.body.title
    let brand = req.body.brand
    let model = req.body.model
    let imageUrl = req.body.image_url


    const sql =
        `INSERT INTO bikes (title, brand, model, image_url, user_id) 
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id;`

    db.query(sql, [title, brand, model, imageUrl, req.session.userId], (err, dbRes) => {
        res.redirect(`/bikes/${dbRes.rows[0].id}`)   //
    })

})

router.delete('/bikes/:id', checkLoggedIn, authoriseUser, (req, res) => {



    let sql = `DELETE FROM bikes WHERE id = $1;`

    db.query(sql, [req.params.id], (err, dbRes) => {
        res.redirect('/home')
    })
})

router.get('/bikes/:id/edit', checkLoggedIn, authoriseUser, (req, res) => {
    const sql = `SELECT * FROM bikes WHERE id = ${req.params.id};`
    db.query(sql, (err, dbRes) => {
        // rows is always an array [{ id: 2, title: 'cake' }]
        let bike = dbRes.rows[0]
        res.render('edit', { bike: bike })
    })
})


router.put('/bikes/:id', checkLoggedIn, (req, res) => {

    const sql =
        `UPDATE bikes SET title = $1, 
    image_url = $2
    WHERE id = $3;`

    db.query(sql, [req.body.title, req.body.image_url, req.params.id], (err, dbRes) => {
        res.redirect(`/bikes/${req.params.id}`)
    })
})


router.get('/bikes/category/scrambler', checkLoggedIn, (req, res) => {

    let sql = `SELECT * FROM bikes WHERE category = 'Scrambler';`

    db.query(sql, (err, dbRes) => {
        if (err) {
            console.log(err);
        }
        let bikes = dbRes.rows  //taking out the first item in the object
        res.render("scrambler", { bikes: bikes })
    })

})


router.get('/bikes/category/caferacer', checkLoggedIn, (req, res) => {

    
    let sql = `SELECT * FROM bikes WHERE category = 'Cafe Racer';`

    db.query(sql, (err, dbRes) => {
        if (err) {
            console.log(err);
        }
        let bikes = dbRes.rows  //taking out the first item in the object
        res.render("cafe-racer", { bikes: bikes })
    })

})



// router.post("/bikes/:id/commen", (req, res) => {
//     let comment = req.body.comment
//     let bikeId = req.params.id


//     let sql = `INSERT INTO comments (comment, bikeid, user_id)
//     VALUES ($1, $2, $3)
//     RETURNING id;`

//     db.query(sql, [comment, bikeId, req.session.userId], (err, dbRes) => {
//         if(err){
//             console.log(err);
//         } else {
//             res.redirect(`/show/${bikeId}`)
//         }
//     })
// })



module.exports = router


