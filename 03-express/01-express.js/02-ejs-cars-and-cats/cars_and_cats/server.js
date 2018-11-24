var express = require('express');
var app = express();

app.use(express.static(__dirname + '/images'));
console.log(__dirname)

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
  response.render('index');
})

app.get('/cars', function (request, response) {
  response.render('cars');
})

app.get('/cars/new', function (request, response) {
  response.render('cars_new');
})

app.get('/cats', function (request, response) {
  response.render('cats');
})

app.listen(8000, function () {
  console.log('listening on port 8000');
})