const express = require('express')
const app = express()
const data = require('./data')
const PORT = process.env.PORT || 3000
const bcrypt = require('bcryptjs');
const expressLayouts = require('express-ejs-layouts')


// body parser middleware

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// set up template engine
app.set('view engine', 'ejs')

// set a layout
app.use(expressLayouts)
app.set("layout","layouts/layout.ejs")


// set up static folder
app.use(express.static('public'))

// set up routes
app.use("", require("./routes/routes"))


app.listen(PORT, () => {
    console.log(`Gday, mate! Here's your app: http://localhost:${PORT}`)
})

