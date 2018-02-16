const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const session = require('express-session')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const logger = require('morgan')
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
const nocache = require('nocache')
const favicon = require('serve-favicon')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')(session)
const passport = require('passport')

/**
 * Init passport strategis
 */

require('./initPassport').init()

/**
 * Mongoose connection
 */

mongoose.connect(process.env.DB_PATH, {
  user: process.env.DB_USER,
  pass: process.env.DB_PASS
})
  .then(() => {
    console.log('Mongoose has been connected to base')
  })
  .catch((err) => {
    console.log('Connection error: ' + err)
  })

/**
 * Viwes engine setup
 */

app.set('views', path.join(__dirname, '../client/src/view'))
app.set('view engine', 'pug')

/**
 * Inti middlewares
 */

// app.use(cookieParser())
process.env.DEV && app.use(nocache())
process.env.DEV || app.use(logger('combined', {stream: accessLogStream}))
process.env.DEV && app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false,
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  }),
  cookie: {
    maxAge: 3600000
  }
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(favicon(path.join(__dirname, '../client/build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, '../client/build')))

/**
 * Routes
 */

app.use('/test', function (req, res, next) {
  res.render(path.join(__dirname, '../client/src/view/staticPage/staticPage.pug'), { title: 'My test' })
})
app.use('/api', require('./routes/api'))
app.use('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

/**
 * Error handling
 */

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
