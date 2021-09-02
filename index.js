const express = require('express')
const app = express()
const data = require('./data')
const PORT = process.env.PORT || 3000

//Homepage

app.get('/', (req, res) => {
    res.send("Welcome to our schedule website")
})

//Dysplay all users

app.get('/users', (req, res) => {
    res.json(data.users)
})


//Dysplay a new user

app.post('/users', (req, res) => {
    res.json(req.body)
})

//Dysplay a single schedule

app.get('/schedules/:id', (req, res) => {
    const found = data.schedules.some(schedule => schedule.id === Number(req.params.id))
    
    if (found) {
        const schedule = data.schedules.filter(schedule => schedule.id === Number(req.params.id))
    res.send(schedule[0])
    } else {
        res.send('Schedules not found')
    }
})


app.listen(PORT, () => {
    console.log(`Gday, mate! Here's your app: http://localhost:${PORT}`)
})

