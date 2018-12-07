const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./server/config/routes.js')(app)

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/quoting_dojo', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));

const path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

let QuoteSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 1 },
  quote: { type: String, required: true, minlength: 1 },
}, { timestamps: true });
mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'User'
let Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'User'

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/quotes', function (req,res) {
  Quote.find({}, function (err, Quote) {
    if (err) { console.log(err); }
    res.render('quotes', { quotes: Quote });
  });
});

app.post('/quotes', function (req, res) {
  console.log('POST DATA', req.body);

  var quote = new Quote({ name: req.body.name, quote: req.body.quote });

  quote.save(function (err) {
    if (err) {
      console.log('something went wrong');
      res.redirect('/');
    } else {
      console.log('successfully added a quote!');
    }
    res.redirect('/quotes');
  });
});

app.listen(8000, function () {
  console.log('listening on port 8000');
});