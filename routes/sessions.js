const express = require('express')
const router =  express.Router()
const db = require('../db')
const bcrypt = require('bcrypt');


router.get("/login", (req, res) => {
    res.render("login")
})

router.post("/login", (req, res) => {
    let email = req.body.email
    let password = req.body.password

    // do you even exist in our database?
    let sql = `SELECT * FROM users WHERE email = '${email}';`

    db.query(sql, (err, dbRes) => {
        if (err) {
            console.log(err)
        }

        if (dbRes.rows.length === 0) {
            res.render("login")
            return
        }

        // user record found 
        // lets check your password
        bcrypt.compare(password, dbRes.rows[0].password_digest, (err, result) => {
            if (err) {
                console.log(err)
            }

            if (result) {
                req.session.userId = dbRes.rows[0].id

                res.redirect('/home')
            } else {
                res.render("login")
            }
        })
    })
})

module.exports = router