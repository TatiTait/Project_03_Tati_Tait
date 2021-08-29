const express = require('express')
const data = require('./data')
const app = express()
const PORT = 3000
const message = "Gday, mate!"
console.log(data)

// Get request - route
app.get('/', (req, res) => {
    res.send(message)
})

//POST request

app.listen(PORT, () => {
    console.log(`Gday, mate! Here's your app: http://localhost:${PORT}`)
})

