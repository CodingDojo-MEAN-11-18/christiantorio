const mongoose = require('mongoose')
const Owl = mongoose.model('Owl')

module.exports = {
  index: function (req, res) {
    Owl.find({}, function (err, Owl) {
      if (err) { console.log(err); }
      res.render('index', { owls: Owl });
    });
  },

  new: function (req, res) {
    res.render('new');
  },

  create: function (req, res) {
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
  },

  show: function (req, res) {
    Owl.find({ _id: req.params.id }, function (err, response) {
      if (err) { console.log(err); }
      res.render('show', { owl: response[0] });
    });
  },

  edit: function (req, res) {
    Owl.find({ _id: req.params.id }, function (err, response) {
      if (err) { console.log(err); }
      res.render('edit', { owl: response[0] });
    })
  },

  update: function (req, res) {
    Owl.updateOne({ _id: req.params.id }, req.body, function (err, result) {
      if (err) { console.log(err); }
      res.redirect('/');
    });
  },

  delete: function (req, res) {
    Owl.remove({ _id: req.params.id }, function (err, result) {
      if (err) { console.log(err); }
      res.redirect('/');
    });
  }
};
