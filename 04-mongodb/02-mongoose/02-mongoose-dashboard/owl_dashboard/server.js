const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/owl_db', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));

const path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

const OwlSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 1 },
  food: { type: String, required: true, minlength: 1 },
  hangout: { type: String, required: true, minlength: 1 }
}, { timestamps: true });
mongoose.model('Owl', OwlSchema);
const Owl = mongoose.model('Owl');

// index

app.get('/', function (req, res) {
  Owl.find({}, function (err, Owl) {
    if (err) { console.log(err); }
    res.render('index', { owls: Owl });
  });
});

// show new form

app.get('/new', function (req, res) {
  res.render('new');
});

// create new user

app.post('/owl', function (req, res) {
  console.log('POST DATA', req.body);

  var owl = new Owl({ name: req.body.name, food: req.body.food, hangout: req.body.hangout });

  owl.save(function (err) {
    if (err) {
      console.log('something went wrong');
      res.redirect('/');
    } else {
      console.log('successfully added info!');
    }
    res.redirect('/');
  });
});

// show user

app.get('/:id', function (req, res) {
  Owl.find({ _id: req.params.id }, function (err, response) {
    if (err) { console.log(err); }
    res.render('show', { owl: response[0] });
  });
});

// edit user

app.get('/:id/edit/', function (req, res) {
  Owl.find({ _id: req.params.id }, function (err, response) {
    if (err) { console.log(err); }
    res.render('edit', { owl: response[0] });
  })
});

// update user

app.post('/:id', function (req, res) {
  Owl.updateOne({ _id: req.params.id }, req.body, function (err, result) {
    if (err) { console.log(err); }
    res.redirect('/');
  });
});

// delete user

app.post('/:id/delete', function (req, res) {
  Owl.remove({ _id: req.params.id }, function (err, result) {
    if (err) { console.log(err); }
    res.redirect('/');
  });
});

app.listen(8000, function () {
  console.log('listening on port 8000');
});