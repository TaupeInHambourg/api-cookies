var express = require('express');
var path = require('path');
var app = express();

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/', loginRouter);

module.exports = app;