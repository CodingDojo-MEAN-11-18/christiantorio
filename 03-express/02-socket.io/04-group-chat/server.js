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

const users = [];

const messages = [];

function isUser (user) {
  const usersCount = users.length;

  for (var i = 0; i < usersCount; i++) {
    if (user === users[i]) {
      return true;
    }
  }
  return false;
}

io.sockets.on('connection', function (socket) {
  socket.on('page_load', function (data) {
    const existingUser = isUser(data.user);
    const event = existingUser ? 'existing_user' : 'load_messages';
    const data2 = existingUser ? {
      error: 'This user already exits'
    } : { current_user: data.user, messages: messages };

    if (!existingUser) {
      users.push(data2.user);
    }

    socket.emit(event, data2);
  });

  socket.on('new_message', function (data) {
    messages.push({ name: data.user, message: data.message });
    io.emit('post_new_message', { new_message: data.message, user: data.user });
  });
});

app.get('/', function (request, response) {
  response.render('index');
});
