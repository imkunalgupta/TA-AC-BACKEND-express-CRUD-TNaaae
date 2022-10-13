var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

// connect to database
mongoose.connect('mongodb://localhost/school', (err) => {
  console.log(err ? err : 'connected to database');
});

//instance of the app

var app = express();

// middlewares

app.use(express.json());

app.use((req, res, next) => {
  res.locals.message = 'Hello World';
  next();
});

//setup view engine

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//routes
app.get('/', (req, res) => {
  var school = { school: 'Altcampus', place: 'Dharmsala' };
  res.render('school', { school: school });
});

app.get('/index', (req, res) => {
  var sports = ['cricket', 'football', 'basketball', 'badminton'];
  res.render('index', { sports: sports });
});
//error handler middlewares

app.use((req, res, next) => {
  res.send('page not found');
});

app.listen(3000, () => {
  console.log('Server lostening on port 3k');
});
