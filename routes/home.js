const express = require('express')

const router = express.Router()

const db = require('../db/index.js')


router.get('/home', (req, res) => {

    //asynchonrous fucntion
    db.query("SELECT * FROM bikes;", (err, dbRes) => {
        if (err) {
            console.log(err);
        }
        let bikes = dbRes.rows
        // console.log(dbRes.rows);

        res.render("home", { bikes: bikes })
    })

})
module.exports = router