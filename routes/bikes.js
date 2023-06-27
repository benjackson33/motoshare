const express = require('express')
const router = express.Router()
const db = require('../db/index.js')

router.get('/bikes/:id', (req, res) => {

    let sql = `SELECT * FROM bikes WHERE id = $1;`

    db.query(sql, [req.params.id], (err, dbRes) => {
        if (err){
            console.log(err);
        }
        let dish = dbRes.rows[0]  //taking out the first item in the object
        res.render("show", { bike: bike })
    })

})
