var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var studentRouter = require('./routes/students');

// connect to mongodb
mongoose.connect('mongodb://localhost/sample', (err) => {
  console.log(err ? err : 'connected to the database');
});

//instance of the app
var app = express();

// setup view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routing middlewares

app.use('/students ', studentRouter);

//error handler
app.use((req, res, next) => {
  res.send('Page not found');
});

//listner

app.listen(3000, () => {
  console.log('Server listening on port 3k');
});
