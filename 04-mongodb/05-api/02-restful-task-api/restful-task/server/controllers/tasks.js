const Task = require('mongoose').model('Task');
const errorHandler = require('./error-handler');

module.exports = {
  index: (request, response) {
    Task.find(request.body)
      .then(tasks => response.json(tasks))
      .catch(errorHandler.bind(response));
  },
  show: function (request, response) {
    Task.findById(request.params.id)
      .then(task => response.json(task))
      .catch(errorHandler.bind(response));
  },
  create: function (request, response) {
    Task.create(request.body)
      .then(task => response.json(task))
      .catch(errorHandler.bind(response));
  },
  update: function (request, response) {
    Task.findByIdAndUpdate(request.params.id, request.body, { new: true })
      .then(task => response.json(task))
      .catch(errorHandler.bind(response));
  },
  destroy: function (request, response) {
    Task.findByIdAndRemove(request.params.id)
      .then(result => response.json(result))
      .catch(errorHandler.bind(response));
  },
};
