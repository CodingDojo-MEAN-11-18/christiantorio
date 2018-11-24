// require express
var express = require('express');
// path module -- try to figure out where and why we use this
var path = require('path');
// create the express app
var app = express();
app.set('views', path.join(__dirname, './views'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// adding session
var session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.get('/', function (request, response) {
  response.render('index');
});

app.post('/result', function (request, response) {
  console.log('POST DATA \n\n', request.body);
  let content = request.body;
  response.render('results', { content: content });
})

app.post('/delete', function (request, response) {
  request.session.count = 1;
  response.redirect('/');
})

// tell the express app to listen on port 8000
app.listen(8000, function () {
  console.log('listening on port 8000');
})