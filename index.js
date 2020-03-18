// Dependencies
const express = require('express')
var session = require('express-session');
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

// Mongodb connection
let db = null
const uri = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASSWORD + "@" + process.env.DB_HOST;

mongo.MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
  if (err) {
    throw err
  }

  db = client.db(process.env.DB_NAME)
})

//Middleware
app.use(express.static('static'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(urlencodedParser);
app.use('/static', express.static('static'))
.use(session({ resave: false, saveUninitialized: true, secret: process.env.SESSION_SECRET }))

//Functions
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
// app.get('/update', adjust)
app.get('/error', notFound)
app.get('/main', function(req,res){

  if(req.session.hobby1) {
      res.render('pages/result.ejs');
  }
  else {
      res.render('pages/main.ejs');
  }
})
app.post('/result', urlencodedParser, search)
// app.get('/result', check)
app.get('/return', (req, res) =>  
res.render('pages/return.ejs'))

function search(req, res, next) {
    let hob = req.body.hobby1
    req.session.hobby1 = hob
    if(req.session.hobby1) {
      db.collection('usersCollection').find({"hobby1" : hob}).toArray(done)
    } else {
      db.collection('usersCollection').find({"hobby1" : hob}).toArray(done)
      res.render('pages/return.ejs')
      (done)
    }

    function done(err, data) {
      if (err) {
        next(err)
      } else {
        res.render('pages/result.ejs', {data: data})
      }
    }
}
app.get('/return',function(req,res){

	req.session.destroy(function(err) {
		if(err) {
			console.log(err);
		} else {
			res.redirect('/main');
		}
	});

});

// function add(req, res, next){
//   db.collection('usersCollection').insertOne({
//       name: req.body.name,
//       email: req.body.email,
//       age: req.body.age,
//       hobby: req.body.hobby
//   })
//   db.collection('usersCollection').find().toArray
//   (done)

//   function done(err, data){
//       if (err){
//           next (err)
//       } else{
//           console.log(data)
//           res.render('partials/details.ejs', {data: data})
//       }
//   }
// }

// function form (req, res)  {
//     res.render('partials/add.ejs')
//   }

// function destroy (req, res)  {
//     res.render('partials/remove.ejs')
//   }

// function adjust (req, res)  {
//     res.render('partials/update.ejs')
//   }

// function remove(req, res, next) {
//   let id = req.body.id
//   db.collection('usersCollection').deleteOne({
//     _id: mongo.ObjectID(id)
//   })
//   db.collection('usersCollection').find().toArray
//   (done)

//   function done(err, data) {
//     if (err) {
//       next(err)
//     } else {
//       console.log(data)
//       res.render('partials/details.ejs', {data: data})
//       console.log('redirected')
//       // res.json({status: 'ok'})
//     }
//   }
// }


// function update(req, res, next){
//   let id = req.body.id
//   let name = req.body.name
// let filter = {_id: mongo.ObjectId(id)};
// let update = {$set: {name: name}}
// db.collection('usersCollection').updateOne(filter, update)
// db.collection('usersCollection').find().toArray
// (done)

//   function done(err, data) {
//         if (err) {
//           next(err)
//         } else {
//           console.log(data)
//           res.render('partials/details.ejs', {data: data})
//           console.log('redirected')
//         }
//       }
// }


function notFound(req, res) {
  res.status(404).render('not-found.ejs')
}

app.listen(port, () => console.log(`Server is running succesfully on port ${ port }!`))
