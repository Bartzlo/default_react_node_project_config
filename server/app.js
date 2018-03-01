const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const session = require('express-session')
// const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const logger = require('morgan')
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
const nocache = require('nocache')
const favicon = require('serve-favicon')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const db = require('./models')
const passport = require('passport')

// Init passport strategis
require('./initPassport').init()

/**
 * Init db
*/

db.sequelize
  .authenticate()
  .then(() => {
    let syncs = []

    for (const key in db) {
      if (db.hasOwnProperty(key) && key !== 'sequelize' && key !== 'Sequelize') {
        syncs.push(db[key].sync())
      }
    }

    return Promise.all([db.User.sync(), db.Session.sync({force: true})])
  })
  .then(() => {
    console.log('DB connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
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
  store: new SequelizeStore({
    db: db.sequelize
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
  res.render(path.join(__dirname, '../client/src/view/blog/staticPage/staticPage.pug'), { title: 'My test' })
})
app.use('/api', require('./routes/api'))
app.use('/*', function (req, res) {
  res.render(path.join(__dirname, '../client/src/view/auth/index.pug'))
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

// other error handler
app.use(function (err, req, res, next) {
  console.log(err.details || err.stack)
  res.status(err.status || 500)
  if (!err.details) err.details = {type: 'unknown error'}
  res.send(err.details)
})

module.exports = app
