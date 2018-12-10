const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const reg = new RegExp('\\.js$', 'i');
const modelsPath = path.resolve('server', 'models');

mongoose.connect('mongodb://localhost/1955_API', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through program termination');
    process.exit(0);
  });
});

fs.readdirSync(modelsPath).forEach(file => {
  if (reg.test(file)) {
    require(path.join(modelsPath, file));
  }
});
