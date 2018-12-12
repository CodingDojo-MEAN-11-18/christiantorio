const fiftyFiveController = require('../controllers/fiftyFive');

module.exports = function (app) {
  app.get('/', fiftyFiveController.index);
  app.get('/new/:name', fiftyFiveController.create);
  app.get('/:name', fiftyFiveController.show);
  app.get('/remove/:name', fiftyFiveController.destroy);
};
