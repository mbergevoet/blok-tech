var express = require('express')
var app = express()
const port = 8000;
// var data = [
//   {
//     id: 'evil-dead',
//     title: 'Evil Dead',
//     plot: 'Five friends travel to a cabin in the …',
//     description: 'Five friends head to a remote …'
//   },
//   {
//     id: 'the-shawshank-redemption',
//     title: 'The Shawshank Redemption',
//     plot: 'Two imprisoned men bond over a number …',
//     description: 'Andy Dufresne is a young and  …'
//   }
// ]
express()
  .use(express.static('static'))
  .set('view engine', 'ejs')
  
  .use('/static', express.static('static'))
  
app.get('/', (req, res) =>
  res.render('main.ejs'))

app.listen(port, () => console.log('Example app listening on port ${ port }!'))