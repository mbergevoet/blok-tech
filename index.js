const express = require('express')
const slug = require('slug')
const bodyParser = require('body-parser')
const path = require('path')
const find = require('array-find')
const urlencodedParser = bodyParser.urlencoded({
  extended: true
});
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
// app.get('/:id', movie)
// app.get('/main', users)
app.get('/add', form)
app.post('/details', urlencodedParser, add);
app.get('/error', notFound)

app.get('/main', (req, res) =>
  res.render('pages/main.ejs'))

function users(req, res, next) {
  db.collection('usersCollection').find().toArray(done)
  
  function done(err, data) {
    if (err) {
      next(err)
    } else {
      console.log(data)
      res.render('partials/details.ejs', {data: data})
    } 
  }
}  

function add(req, res, next){
  db.collection('usersCollection').insertOne({
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      hobby: req.body.hobby
  }, done)

  function done(err, data){
      if (err){
          next (err)
      } else{
          // res.redirect('/details' + data.insertedId)
          res.render('partials/details.ejs', {data: data})
          console.log(data)
      }
  }
}

function form (req, res)  {
    res.render('partials/add.ejs')
  }

// function find(req, res, next){
//   var id = req.params.id
//   db.collection('movies').findOne({
//       _id: mongo.ObjectID(id)
//   }, done)

//   function done(err, data){
//       if (err){
//           next (err)
//       } else{
//           res.render('detail.ejs', {data: data})
//       }
 
//   }

// function remove(req, res, next) {
//   var id = req.params.id
//   db.collection('usersCollection').deleteOne({
//     _id: mongo.ObjectID(id)
//   }, done)

//   function done(err) {
//     if (err) {
//       next(err)
//     } else {
//       res.json({status: 'ok'})
//     }
//   }
// }

function notFound(req, res) {
  res.status(404).render('not-found.ejs')
}

app.listen(port, () => console.log(`Server is running succesfully on port ${ port }!`))
