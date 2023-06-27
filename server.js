require('dotenv').config()

const express = require("express")
const app = express()
const port = 3000

const expressLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')

const indexRouter = require('./routes/index')
const homeRouter = require('./routes/home')
const bikesRouter = require('./routes/bikes')
const sessionsRouter = require('./routes/sessions')

// const requestLogger = require("./middlewares/request_logger")


const session = require('express-session')
const setUser = require('./middleware/set_user')




app.set("view engine", "ejs")
app.use(express.static("public"))
// req.body
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}))

app.use(session({
    // cookie: { maxAge: 1000 * 60 * 60 * 24 * 3 },
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))


app.use(setUser)

app.use(expressLayouts)

app.use("/", indexRouter)

app.use("/", homeRouter)

app.use("/", bikesRouter)

app.use("/", sessionsRouter)









app.listen(port, () => {
    console.log(`listening on ${port}`);
})