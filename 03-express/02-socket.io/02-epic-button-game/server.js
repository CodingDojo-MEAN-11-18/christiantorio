const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));

let path = require('path');

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const io = require('socket.io')(server);
let count = 0;

io.on('connection', socket => {

  socket.on('submit', function () {
    console.log('Someone is adding to the count')
    io.emit('updated_count', ++count);
  });

  socket.on('reset', function (data) {
    console.log('Someone is resetting')
    count = 0;
    io.emit('updated_count', count);
  });

  console.log(count)
});

// let session = require('express-session');
// app.use(session({
//   secret: 'keyboardkitteh',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { maxAge: 60000 }
// }));

app.get('/', function (request, response) {
  response.render('index');
});
