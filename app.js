var express = require('express');
var path = require('path');
var logger = require('morgan');
var sequelize = require('./models');
var viewRouter = require('./routes/view');
var apiRouter = require('./routes/api');

var app = express();

sequelize.sequelize.sync();

// view engine setup
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', viewRouter);
app.use('/api', apiRouter);
console.log("test");
module.exports = app;
