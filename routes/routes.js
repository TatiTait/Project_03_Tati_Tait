const express = require("express")
const router = express.Router()
const bcrypt = require('bcryptjs')
const data = require("../data")


//Home WORKS

router.get('/', (req, res) => {
    res.render('pages/index')
})

//All users WORKS

router.get('/users', (req, res) => {
    res.render('pages/users', {
        users: data.users
    })
})

//All schedules  WORKS

router.get("/schedules", (req, res) => {
    res.render('pages/schedules', {
        schedules: data.schedules
    })
})

//Dysplay a single user  WORKS

router.get("/users/:id(\\d+)", (req, res) => {
    res.render ('./pages/single-user', {
        user: data.users[parseInt (req.params.id)]
    })
})

//Schedules for single user WORKS

router.get("/users/:id/schedules", (req, res) => {
    const id = parseInt(req.params.id)
    singleSchedules = data.schedules.filter(schedule => schedule.user_id === id)
    res.render('./pages/single-schedule.ejs', {
        singleSchedules
    })
})

//Add new user, password encrypted 

router.get("/users/new", (req, res) => {
    res.render("pages/new-user", {
        users:data.users
    })
})


router.post('/users', (req, res) => {
    const {firstname, lastname, email, password} = req.body
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    const newUser = {
        firstname, lastname, email, password:hash
    }
    data.users.push(newUser)
    res.redirect('/users')
})

//Add new schedule

router.get("/schedules/new", (req, res) => {
    res.render("./pages/schedules-form")
})

router.post("/schedules", (req, res) => {
    const newSchedule = req.body
    data.schedules.push(newSchedule)
    res.redirect('/schedules')
})


module.exports = router