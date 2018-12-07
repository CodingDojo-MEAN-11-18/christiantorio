const mongoose = require('mongoose');
let Quote = mongoose.model('Quote'); 

module.exports = {

  index: function (req, res) {
    res.render('index');
  },

  show: function (req, res) {
    Quote.find({}, function (err, Quote) {
      if (err) { console.log(err); }
      res.render('quotes', { quotes: Quote });
    });
  },

  create: function (req, res) {
    console.log('POST DATA', req.body);
    var quote = new Quote({ name: req.body.name, quote: req.body.quote });
    quote.save(function (err) {
      if (err) {
        console.log('something went wrong');
        for (var key in err.errors) {
          req.flash('registration', err.errors[key].message);
        }
        res.redirect('/');
      } else {
        console.log('successfully added a quote!');
      }
      res.redirect('/quotes');
    });
  },
};