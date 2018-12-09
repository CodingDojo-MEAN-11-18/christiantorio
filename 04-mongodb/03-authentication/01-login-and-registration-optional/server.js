const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('express-flash');
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(flash());
mongoose.Promise = global.Promise;

app.use(session({
  secret: 'asfasdfgadgadg',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

mongoose.connect('mongodb://localhost/login_registration', { useNewUrlParser: true }, function (err, db) {
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

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: [true, 'Must leave a name'] },
  lastName: { type: String, required: [true, 'Must leave a comment'] },
  email: { type: String, required: [true, 'Must leave an email'] },
  password: { type: String, required: [true, 'Must leave a password'] },
  confirmPassword: { type: String, required: [true, 'Must leave a password'] }
}, { timestamps: true });
mongoose.model('User', UserSchema);
const User = mongoose.model('User');

app.get('/', function (req, res) {
  res.render('index');
});

app.post('/register', function (req, res) {
  console.log('POST DATA', req.body);

  var user = new User({ firstName: req.body.firstname, lastName: req.body.lastname, email: req.body.email, password: req.body.password, confirmPassword: req.body.confirmpassword });

  bcrypt.hash('password_from_form', 10)
.then(hashed_password => {

})
.catch(error => {

});
  user.save(function (err) {
    if (err) {
      console.log('something went wrong');
      res.redirect('/');
    } else {
      bcrypt.hash(req.body.password, 10)
        .then('password' => {
          { firstName: req.body.firstname,
            lastName: req.body.lastname,
            email: req.body.email,
            password: password
          }
      })
      .catch(error => {
        console.log('error')
      });

    }
    res.redirect('/');
  });
});

// app.post('/sessions', (req, res) {
//   console.log(' req.body: ', req.body);
//   User.findOne({ email: req.body.email, password: req.body.password }, (err, user) => {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       req.session.user_id = user._id;
//       req.session.email = user.email;
//       res.redirect('/');
//     }
//   });
// });

app.listen(8000, function () {
  console.log('listening on port 8000');
});
