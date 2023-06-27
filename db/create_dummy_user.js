require('dotenv').config()

const db = require('./index.js')
const bcrypt = require('bcrypt');

let email = 'ben@ben.com'
let plainTextPassword = "12345"
let saltRounds = 10



// 1. gen a salt 
bcrypt.genSalt(saltRounds, (err, salt) => {

    //hash/digest the password
    bcrypt.hash(plainTextPassword, salt, (err, hash) => {

        //inser in to the users table
        let sql = `insert into users (email, password_digest)
        values ('${email}', '${hash}');`

        db.query( sql, (err, res)=> {
            if (err){
                console.log(err);
            } else {
                console.log('new user made');
            }
        })
    })
})