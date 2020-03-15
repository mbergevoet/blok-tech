const express = require('express')
const slug = require('slug')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const find = require('array-find')
const multer = require('multer')
const mongo = require('mongodb')
require('dotenv').config()
const port = 8000;

let db = null
const uri = 'mongodb://' + process.env.DB_URI + ':' + process.env.DB_PORT

mongo.MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
  if (err) {
    throw err
  }

  db = client.db(process.env.DB_NAME)
})

function users(req, res, next) {
  db.collection('collection1').find().toArray(done)

  function done(err, data) {
    if (err) {
      next(err)
    } else {
      res.render('details.ejs', {data: data})
    } 
  }
}

// app.use(express.static('static'))
// app.use(bodyParser.urlencoded({extended: true}))
// app.use('/static', express.static('static'))
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'ejs')
// // app.get('/:id', movie)
// app.get('/add', form)
// app.post('/details', add)
// app.get('/main', (req, res) =>
//   res.render('pages/main.ejs', {data: data}))

  
// function form(req, res) {
//     res.render('details.ejs')
//   }

// function add(req, res) {
//   data.push({
//     title: req.body.title,
//     plot: req.body.plot,
//     description: req.body.description
//   })

//   res.render('partials/details.ejs', {data: data})
// }

// function movie(req, res, next){
//   var id = req.params.id
//   var movie = find(data, function (value){
//       return value.id === id;
//   })

//   if (!movie){
//       next()
//       return
//   }
//   res.render('add.ejs', {data: data})
// }

app.listen(port, () => console.log(`Example app listening on port ${ port }!`))
