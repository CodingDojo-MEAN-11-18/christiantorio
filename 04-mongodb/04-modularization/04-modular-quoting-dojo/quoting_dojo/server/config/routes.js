const quoteController = require('../controllers/quotes');

module.exports = function (app) {
  app.get('/', quoteController.index);
  app.get('/quotes', quoteController.find);
  app.post('/quotes', quoteController.create);
};
