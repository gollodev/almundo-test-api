const createError = require('http-errors')
const express = require('express')
const logger = require('morgan')
const cors = require('cors')

require('./config')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
const hotelRoutes = require('./api/hotels')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/hotel', hotelRoutes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
});

module.exports = app;
