const owlController = require('../controllers/owls');

module.exports = function (app) {
  app.get('/', owlController.index);
  app.get('/new', owlController.new);
  app.post('/owl', owlController.create);
  app.get('/:id', owlController.show);
  app.get('/:id/edit/', owlController.edit);
  app.post('/:id', owlController.update);
  app.post('/:id/delete', owlController.delete);
};
