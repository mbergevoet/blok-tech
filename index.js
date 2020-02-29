// const camelCase = require('camelcase');
// console.log(camelCase('foo-bar')); 

const express = require('express')
const app = express()
const port = 8000;
const path = require('path');

app.use('/static', express.static('static'));

// function onhome(req, res) {
//   res.send('<h1>Hello Client</h1>\n')
// }

// app.get('/', (req, res) =>
//   res.send('<h1>Hello Client</h1>\n')

app.get('/index', (req, res) =>
  res.sendfile(path.join(__dirname + 'static/index.html')))

app.get('/myprofile', (req, res) =>
  res.sendfile(path.join(__dirname + 'static/myprofile.html')))

app.get('/mychats', (req, res) =>
  res.sendfile(path.join(__dirname + 'static/chats.html')))

app.get('/mp3', (req, res) =>
  res.sendfile(path.join(__dirname + 'static/chats.html')))

app.listen(port, () => console.log('Example app listening on port ${ port }!'))


// http://localhost:8000/static/index.html
// http://localhost:8000/static/my-profile.html
// http://localhost:8000/static/my-profile.html

