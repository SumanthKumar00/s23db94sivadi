var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});

var indexRouter = require('./routes/index');
var dogRouter = require('./routes/dog');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var usersRouter = require('./routes/users');
var resourceRouter = require('./routes/resource');


var dog = require('./models/dog');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/dog', dogRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/users', usersRouter);
app.use('/resource', resourceRouter);
// catch 404 and forward to error handler
// We can seed the collection if needed on server start
async function recreateDB(){
  // Delete everything
  await dog.deleteMany();
  let instance1 = new dog({dog_name:"rocky", dog_color:'skin', dog_age:2});
  instance1.save().then(doc=>{
  console.log("First object saved")}
  ).catch(err=>{
  console.error(err)
  });
  
  let instance2 = new dog({dog_name:"blacky", dog_color:'black', dog_age:4});
  instance2.save().then(doc=>{
  console.log("Second object saved")}
  ).catch(err=>{
  console.error(err)
  });
  
  let instance3 = new dog({dog_name:"spider", dog_color:'white', dog_age:5});
  instance3.save().then(doc=>{
  console.log("Third object saved")}
  ).catch(err=>{
  console.error(err)
  });
  }
  let reseed = true;
  if (reseed) {recreateDB();}
  //
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
