// const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const favicon = require('serve-favicon');

const passport = require('passport');

require('dotenv').config();
require('./app-api/models/db');
require('./app-api/config/passport');

const apiRouter = require('./app-api/routes/inedx');
const serverRouter = require('./app-server/routes/index');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app-server', 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app-public', 'build')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(passport.initialize());

app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept, Authorization');
  next();
});

app.use(/(\/about)|(\/program)|(\/signup)|(\/login)/, (req, res, next) => {
  res.sendFile(path.join(__dirname, 'app-public', 'build', 'index.html'));
});
app.use('/api', apiRouter);
app.use(/(\/email)|(\/stream)/, serverRouter);

// catch un authorized error
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError')
    res
      .status(401)
      .json({ "message": err.name + ": " + err.message });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  //next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
