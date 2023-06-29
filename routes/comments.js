const express = require('express')
const router = express.Router()
const db = require('../db/index.js')
const checkLoggedIn = require('../middleware/checkLoggedIn')
const authoriseUser = require('../middleware/authorisedUser.js')


router.get("/comments", (req, res) => {

    let userId = req.session.userId;
    
  
    let sql = `SELECT * FROM comments WHERE user_id, bikeid = $1,`;
  
    db.query(sql, [userId], (err, dbRes) => {
      if (err) {
        console.log(err);
      } else {
        const comments = dbRes.rows;
        console.log(comments);
        res.render('comments', { comments: comments });
      }
    });
  });
  






router.post("/comments/", (req, res) => {
    let comment = req.body.comment
    let bikeId = req.params.id


    let sql = `INSERT INTO comments (comment, bikeid, user_id)
    VALUES ($1, $2, $3)
    RETURNING id;`

    db.query(sql, [comment, bikeId, req.session.userId], (err, dbRes) => {
        if(err){
            console.log(err);
        } else {
            res.redirect("comments")
        }
    })
})

// router.get('/user-comments', (req, res) => {
//     let userId = req.session.userId;
  
//     let sql = `SELECT * FROM comments WHERE user_id = $1`;
  
//     db.query(sql, [userId], (err, dbRes) => {
//       if (err) {
//         console.log(err);
//       } else {
//         const comments = dbRes.rows;
//         console.log(comments);
//         res.render('comments', { comments: comments });
//       }
//     });
//   });
  


module.exports = router