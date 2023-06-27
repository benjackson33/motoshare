const express = require('express')

const router = express.Router()

const db = require('../db/index.js')



router.get('/', (req, res) => {
    res.render("index", { layout: false })
})

module.exports = router