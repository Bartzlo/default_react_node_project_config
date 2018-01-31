const fs = require('fs')
const express = require('express')
const app = express()
const session = require('express-session')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')(session)
const path = require('path')
const bcrypt = require('bcrypt')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const nocache = require('nocache')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
require('dotenv').config()
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})

// models
const User = require('./models/User')

// connect to db
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

// view engine setup
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'jade')

// config passport
passport.use('local', new LocalStrategy(
  function (username, password, done) {
    let user
    User.findOne({ username: username }).exec()
      .then(res => {
        if (!res) throw (new Error('user not found'))
        user = res
        return bcrypt.compare(password, user.password)
      })
      .then(isComare => {
        if (!isComare) throw (new Error('incorrect password'))
        return done(null, user)
      })
      .catch(err => {
        if (err.message === 'user not found') return done(null, false, 'user not found')
        if (err.message === 'incorrect password') return done(null, false, 'incorrect password')
        console.log(err.stack)
        return done(err)
      })
  }
))

passport.serializeUser(function (user, done) {
  if (user) done(null, user.id)
})

passport.deserializeUser(function (id, done) {
  User.findById(id).exec()
    .then(user => done(null, user))
    .catch(err => done(err, false))
})

// middlewars
app.use(nocache())
// app.use(logger('short', {stream: accessLogStream}))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(cookieParser())
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
