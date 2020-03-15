const express = require('express')
const slug = require('slug')
const bodyParser = require('body-parser')
const path = require('path')
const find = require('array-find')
const multer = require('multer')
const mongo = require('mongodb')
const app = express()
require('dotenv').config()

const port = 8000

let db = null
const uri = process.env.DB_URI

mongo.MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
  if (err) {
    throw err
  }

  db = client.db(process.env.DB_NAME)
})

app.use(express.static('static'))
app.use(bodyParser.urlencoded({extended: true}))
app.use('/static', express.static('static'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/main', users)
app.get('/error', notFound)

// app.get('/:id', movie)
// app.get('/add', form)
// app.post('/details', add)

app.get('/main', (req, res) =>
  res.render('pages/main.ejs', {data: data}))

function users(req, res, next) {
  db.collection('usersCollection').find().toArray(done)
  
  function done(err, data) {
    if (err) {
      next(err)
    } else {
      console.log(data)
      res.render('details.ejs', {data: data})
    } 
  }
}  

function notFound(req, res) {
  res.status(404).render('not-found.ejs')
}

app.listen(port, () => console.log(`Example app listening on port ${ port }!`))
