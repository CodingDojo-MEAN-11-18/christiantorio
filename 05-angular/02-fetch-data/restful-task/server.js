const compress = require('compression');
const parser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const cors = require('cors');

var app = express();

const port = process.env.PORT || 8000;

app.use(helmet())
  .use(compress())
  .use(cors())
  .use(logger('dev'))
  .use(parser.json())
  .use(parser.urlencoded({ extended: true }));

require('./server/config/database');
app.use(express.static(__dirname + '/public/dist/public'));

app.listen(port, () => console.log(`express listening on port ${port}`));
