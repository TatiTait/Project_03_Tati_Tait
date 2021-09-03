const express = require('express')
const app = express()
const data = require('./data')
const PORT = process.env.PORT || 3000
const bcrypt = require('bcryptjs');


// body parser middleware

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Homepage

app.get('/', (req, res) => {
    res.send("Welcome to our schedule website")
})

//All users

app.get('/users', (req, res) => {
    res.send(data.users)
})

//All schedules

app.get("/schedules", (req, res) => {
    res.send(data.schedules)
})


//Single user 

app.get("/users/:id", (req, res) => {
    res.send (data.users[parseInt (req.params.id)])
})

//Schedules for single user 

app.get("/users/:id/schedules", (req, res) => {
    const id = parseInt(req.params.id)
    singleSchedules = data.schedules.filter(schedule => schedule.user_id === id)
    res.send(singleSchedules)
})

//Add new schedule for user in POST and return updated info

app.post("/schedules", (req, res) => {
    const newSchedule = req.body
    data.schedules.push(newSchedule)
    res.send(data.schedules)
})


//Add new user in POST and return updated users list, password encrypted 

app.post('/users', (req, res) => {
    const {firstname, lastname, email, password} = req.body
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    //console.log(hash)
    const newUser = {
        firstname, lastname, email, password:hash
    }
    data.users.push(newUser)
    res.json(data.users)
})





// For invalid routes
app.get('*', (req, res) => {
    res.send('404! This is an invalid URL.');
  });




app.listen(PORT, () => {
    console.log(`Gday, mate! Here's your app: http://localhost:${PORT}`)
})

