const mongoose = require('mongoose')
const Quote = mongoose.model('Quote')

module.exports = {
  index: function (req, res) {
    res.render('index');
  },

  create: function (req, res) {
    console.log('POST DATA', req.body);

    var quote = new Quote({ name: req.body.name, quote: req.body.quote });

    quote.save(function (err) {
      if (err) {
        console.log('something went wrong');
        res.redirect('/');
      } else {
        console.log('successfully added a quote!');
        res.redirect('/');
      }
    });
  },
  find: function (req, res) {
    Quote.find({}, function (err, Quote) {
      if (err) { console.log(err); }
      res.render('quotes', { quotes: Quote });
    }
    )}
};
