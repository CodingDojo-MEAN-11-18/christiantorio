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

io.on('connection', function (socket) {
  socket.on('posting_form', function (data) {
    let num = Math.floor((Math.random() * 1000) + 1);
    let message = `You emitted the following information to the server: Name: ${data.name},Location: ${data.location}, Location: ${data.language}, Comment: ${data.comment},Your Lucky Number is ${num}`;
    socket.emit('updated_message', { response: message });
  });
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
