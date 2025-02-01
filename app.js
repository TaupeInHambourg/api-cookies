var express = require('express');
var app = express();

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var trialRouter = require('./routes/trial');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/', loginRouter);
app.use('/', trialRouter);

module.exports = app;