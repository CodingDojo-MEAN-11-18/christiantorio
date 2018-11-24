var express = require('express');
var app = express();

app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + '/images'));
console.log(__dirname)

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
  response.render('index');
})

app.get('/cats', function (request, response) {
  response.render('cats');
})

app.get('/cuddles', function (request, response) {
  var cat = [
    { name: 'Cuddles', images: 'andrew-umansky-714774-unsplash.jpg', food: 'meow chow', age: '3', spots: ['under the bed', 'in the kitchen'] },
  ];

  response.render('details', { cats: cat });
})

app.get('/meow', function (request, response) {
  var cat = [
    { name: 'Kitten', images: 'mikhail-vasilyev-253977-unsplash.jpg', food: 'fish', age: '10', spots: ['in the kitchen', 'on the bed'] },
  ];

  response.render('details', { cats: cat });
})

app.get('/kitten', function (request, response) {
  var cat = [
    { name: 'Kitten', images: 'karina-vorozheeva-666313-unsplash.jpg', food: 'Cat food', age: '2', spots: ['anywhere', 'on the bed'] },
  ];

  console.log(cat[0].spots)

  response.render('details', { cats: cat });
})

app.listen(8000, function () {
  console.log('listening on port 8000');
})