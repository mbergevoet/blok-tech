const express = require('express')
const slug = require('slug')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const find = require('array-find');
const port = 8000;

let data = [
  {
    id: 'evil-dead',
    title: 'Evil Dead',
    plot: 'Five friends travel to a cabin in the woods, where they unknowingly release flesh-possessing demons.',
    description: 'Five friends head to a remote cabin, where the discovery of a Book of the Dead leads them to unwittingly summon up demons living in the nearby woods. The evil presence possesses them until only one is left to fight for survival.'
  },
  {
    id: 'the-shawshank-redemption',
    title: 'The Shawshank Redemption',
    plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    description: 'Andy Dufresne is a young and successful banker whose life changes drastically when he is convicted and sentenced to life imprisonment for the murder of his wife and her lover. Set in the 1940’s, the film shows how Andy, with the help of his friend Red, the prison entrepreneur, turns out to be a most unconventional prisoner.'
  }
]

express()
  .use(express.static('static'))
  .use(bodyParser.urlencoded({extended: true}))
  .use('/static', express.static('static'))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', form)
  .get('/:id', movie)
  .post('/details', add)
  
app.get('/', (req, res) =>
  res.render('pages/main.ejs', {data: data}))

  
function form(req, res) {
    res.render('add.ejs')
  }

function add(req, res) {
  var id = slug(req.body.title).toLowerCase()
  console.log(id)
  data.push({
    id: id,
    title: req.body.title,
    plot: req.body.plot,
    description: req.body.description
  })

  res.redirect('/' + id) 
}

function movie(req, res, next){
  var id = req.params.id
  var movie = find(movies, function (value){
      return value.id === id;
  })

  if (!movie){
      next()
      return
  }
  res.render('details.ejs', {data: movie})
}

app.listen(port, () => console.log(`Example app listening on port ${ port }!`))
