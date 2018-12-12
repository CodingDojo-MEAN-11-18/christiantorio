const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

const path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

require('./server/models/person');
require('./server/config/database.js');
require('./server/config/routes.js')(app);

app.listen(8000, function () {
  console.log('listening on port 8000');
});
