const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');

module.exports = function (app) {
  app.get('/', function (req, res) {
    Quote.index(req, res);
  });

  app.get('/quotes', function (req, res) {
    Quote.show(req, res);
  });

  app.post('/quotes', function (req, res) {
    Quote.create(req, res);
  });
};