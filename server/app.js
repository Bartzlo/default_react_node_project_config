const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const nocache = require('nocache')

const app = express()

// connect to db
mongoose.connect('mongodb://bart:123QWEasd@127.0.0.1:27017/blog?authMechanism=DEFAULT&authSource=blog')
  .then(() => {
    console.log('Mongoose has been connected to base')
  })
  .catch((err) => {
    console.log('Connection error: ' + err)
  })

// view engine setup
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(nocache())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../client/build')))

app.use('/api', require('./routes/api'))
app.use('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  console.log(err.details || err.stack)
  res.status(err.status || 500)
  if (!err.details) err.details = {type: 'unknown error'}
  res.send(err.details)
})

module.exports = app
