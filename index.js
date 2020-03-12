const express = require('express')
const slug = require('slug')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const find = require('array-find');
var multer = require('multer')
var mongo = require('mongodb')

const port = 8000;

// let data = [
//   {
//     id: 'evil-dead',
//     title: 'Evil Dead',
//     plot: 'Five friends travel to a cabin in the woods, where they unknowingly release flesh-possessing demons.',
//     description: 'Five friends head to a remote cabin, where the discovery of a Book of the Dead leads them to unwittingly summon up demons living in the nearby woods. The evil presence possesses them until only one is left to fight for survival.'
//   },
//   {
//     id: 'the-shawshank-redemption',
//     title: 'The Shawshank Redemption',
//     plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
//     description: 'Andy Dufresne is a young and successful banker whose life changes drastically when he is convicted and sentenced to life imprisonment for the murder of his wife and her lover. Set in the 1940’s, the film shows how Andy, with the help of his friend Red, the prison entrepreneur, turns out to be a most unconventional prisoner.'
//   }
// ]

require('dotenv').config()

var db = null
var url = 'mongodb://' + process.env.DB_HOST + ':' + process.env.DB_PORT

mongo.MongoClient.connect(url, function (err, client) {
  if (err) throw err
  db = client.db(process.env.DB_NAME)
})

function users(req, res, next) {
  db.collection('collection1').find().toArray(done)

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
//     res.render('add.ejs')
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
