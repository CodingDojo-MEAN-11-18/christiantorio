const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('express-flash');

app.use(flash());
mongoose.Promise = global.Promise;

app.use(session({
  secret: 'asfasdfgadgadg',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

mongoose.connect('mongodb://localhost/message_board', { useNewUrlParser: true }, function (err, db) {
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
  Message.find({}, function (err, Message) {
    if (err) { console.log(err); }
    res.render('index', { messages: Message });
  });
});

app.post('/message', function (req, res) {
  console.log('POST DATA', req.body);
  const message = new Message({ name: req.body.name, message: req.body.message });

  message.save(function (err) {
    if (err) {
      console.log('something went wrong');
      res.render('index.ejs', { errors: Message.errors });
    } else {
      console.log('successfully added message!');
    }
    res.redirect('/');
  });
});

app.post('/comment/:id', function (req, res) {

  console.log('POST DATA', req.body);

  Comment.create(req.body, function (err, data) {
    if (err) {
      console.log('first step')
      console.log(err)
      console.log('We have an error!', err);
      for (var key in err.errors) {
        req.flash('comment', err.errors[key].message);
      }
      res.redirect('/')
    } else {
      Message.findByIdAndUpdate({ _id: req.params.id }, { new: true }, { $push: { comment: data }, 
        function (err, data) {
          if (err) {
            for (var key in err.errors) {
              req.flash('comment', err.errors[key].message);
            }
            console.log('trying to push a comment');
            console.log(err);
          } else {
            Message.save;
            console.log(data);
            res.redirect('/')
          }
        }
      });
    }
  });
});

app.listen(8000, function () {
  console.log('listening on port 8000');
});