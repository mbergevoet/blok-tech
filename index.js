let express = require('express')
var slug = require('slug')
var bodyParser = require('body-parser')
let app = express()
const port = 8000;

let data = [
  {
    id: 'evil-dead',
    title: 'Evil Dead',
    plot: 'Five friends travel to a cabin in the …',
    description: 'Five friends head to a remote …'
  },
  {
    id: 'the-shawshank-redemption',
    title: 'The Shawshank Redemption',
    plot: 'Two imprisoned men bond over a number …',
    description: 'Andy Dufresne is a young and  …'
  }
]

express()
  .use(express.static('static'))
  .use(bodyParser.urlencoded({extended: true}))
  .use('/static', express.static('static'))
  .set('view engine', 'ejs')
  .get('/add', form)
  .post('/', add)
  
app.get('/', (req, res) =>
  res.render('main.ejs', {data: data}))

app.get('/', (req, res, next) =>
  res.render('details.ejs', {data: data}))

app.get('/', (req, res, next) =>
  res.render('head.ejs', {data: data}))

app.get('/', (req, res, next) =>
  res.render('add.ejs', {data: data}))

app.from('/', (req, res) =>
  res.render('add.ejs'))

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

app.listen(port, () => console.log(`Example app listening on port ${ port }!`))