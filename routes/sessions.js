const express = require('express')
const router = express.Router()
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
                req.flash('success', 'This is a success message'); 
                res.redirect('/home')
            } else {
                res.render("login")
            }
        })
    })
})

router.delete("/logout", (req, res) => {
    req.session.userId = undefined
    req.flash('success', 'This is a success message'); 
       res.redirect('/home')
})

router.get('/signup', (req, res) => {
    res.render("signup")
})

router.post("/signup", (req, res) => {

    let email = req.body.email;
    let password = req.body.password;
    let saltRounds = 10;

    db.query(`SELECT * FROM users WHERE email = $1;`, [email], (err, dbRes) => {
        if (err) {
            console.log(err)
        }
        if (dbRes.rows.length === 1) {
            console.log("email in use")
            res.redirect("/login")
        } else {
            bcrypt.genSalt(saltRounds, (err, salt) => {
                if (err) {
                    console.log(err)
                }
                bcrypt.hash(password, salt, function (err, hash) {
                    if (err) {
                        res.redirect("/new-user")
                    }
                    const sql = `INSERT INTO users (email, password_digest) VALUES ($1, $2) RETURNING id;`
                    db.query(sql, [email, hash], (err, dbRes) => {
                        if (err) {
                            console.log(err)
                        } else {
                            console.log("new user created")
                            res.redirect("/home")
                        }
                    })
                })
            })
        }
    })
});


module.exports = router