const pg = require("pg") //getting postgres


const db = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
})






module.exports = db