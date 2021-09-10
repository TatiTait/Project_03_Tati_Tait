const express = require("express")
const router = express.Router()
const pgp = require('pg-promise')();
const cn = 'postgres://postgres:070517@localhost:5432/mr_coffee';
const db = pgp(cn);

//Home page now dysplays all schedules from db

router.get('/', (req, res) => {
    db.any('SELECT * FROM schedules;')
    .then((schedulesData) => {
      res.render('pages/schedules', {
        schedules: schedulesData
      })
    })
    .catch((err) => {
      res.send(err.message)
    })
  })

//Opens new schedule form and after filling redirects to home(all schedules) page

router.get("/new", (req, res) => {
    res.render("./pages/schedules-form")
})

router.post("/new", (req, res) => {
    db.none('INSERT INTO schedules (user_id, username, day, start_at, end_at) VALUES ($1, $2, $3, $4, $5);',
    [req.body.user_id, req.body.username, req.body.day, req.body.start_at, req.body.end_at])
    .then(()=>{
        res.redirect("/");
    })
    .catch((err)=>{
        console.log(err);
        res.send(err)
    })
  })

module.exports = router