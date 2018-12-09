const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('express-flash');
app.use(session({
  secret: 'asfasdfgadgadg',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.use(flash());

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/messages', { useNewUrlParser: true }, function (err, db) {
  if (err) {
    console.log('error here');
    console.log(err);
  }
});

app.use(bodyParser.urlencoded({ extended: true }));

const path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

const CommentSchema = new mongoose.Schema({
  name_comment: { type: String, required: [true, 'Must leave a name'] },
  comment: { type: String, required: [true, 'Must leave a comment'] }
}, { timestamps: true });
mongoose.model('Comment', CommentSchema);
const Comment = mongoose.model('Comment');

const MessageSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Must leave a name'] },
  message: { type: String, required: [true, 'Must leave a message'] },
  comments: [CommentSchema]
}, { timestamps: true });
mongoose.model('Message', MessageSchema);
const Message = mongoose.model('Message');

app.get('/', function (req, res) {
  Message.find({}).populate('comments').exec(function (err, messages) {
    if (err) {
      console.log(err);
    } else {
      res.render('index.ejs', { messages: messages });
    }
  });
});

app.post('/message', function (req, res) {
  console.log('POST DATA', req.body);
  const message = new Message({ name: req.body.name, message: req.body.message });

  message.save(function (err) {
    if (err) {
      console.log('something went wrong');
      for (let key in err.errors) {
        console.log(err.errors[key].message)
        req.flash('errors', err.errors[key].message);
      }
      res.redirect('/');
    } else {
      console.log('adding a new message');
      res.redirect('/');
    }
  });
});
app.post('/comment/:id', function (req, res) {

  console.log('POST DATA', req.body);
  const comment = new Comment(req.body);
  comment.save()
    .then(comment => {
      return Message.findById(req.params.id)
        .then(message => {
          console.log('adding a new comment')
          message.comments.push(comment);
          return message.save();
        })
        .then(() => {
          res.redirect('/');
        });
    })
    .catch(error => {
      Object.keys(error.errors).map(key => req.flash('errors', error.errors[key].message));
      res.redirect('/');
    });
});

app.listen(8000, function () {
  console.log('listening on port 8000');
});
