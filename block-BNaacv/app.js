var express = require('express');
var path = require('path');
var userRouter = require('./routes/users');

// instance of the app

var app = express();

//setup template engine

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routing middlewares

app.use('/users', userRouter);

//error handler
app.use((req, res, next) => {
  res.status(404).send('Page not Found');
});

//listner

app.listen(4000, () => {
  console.log('Server listening on port 4k');
});
