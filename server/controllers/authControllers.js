const passport = require('passport')
const User = require('../models/User')
const Session = require('../models/Session')
const ResponseError = require('../lib/ResponseError')

exports.signup = function (req, res, next) {
  let sourceName = 'authController.signup'
  let {username, email, password, passwordConf} = req.body

  if (!username ||
  !email ||
  !password ||
  !passwordConf) {
    return next(new ResponseError({type: 'error', message: 'required field is not filled', source: sourceName, status: 400}))
  }

  if (password !== passwordConf) {
    return next(new ResponseError({type: 'error', message: 'passwords do not match', source: sourceName, status: 400}))
  }

  let user = new User(req.body)
  user.save()
    .then(user => {
      res.send({type: 'ok', message: 'new user created', arg: {username: user.username}})
    })
    .catch(err => {
      if (err.message.indexOf('duplicate key') >= 0 && err.message.indexOf('email') >= 0) {
        return next(new ResponseError({type: 'error', message: 'duplicate email', arg: email, source: sourceName, status: 400}))
      }
      if (err.message.indexOf('duplicate key') >= 0 && err.message.indexOf('username' >= 0)) {
        return next(new ResponseError({type: 'error', message: 'duplicate username', arg: username, source: sourceName, status: 400}))
      }
      return next(new Error(err.message))
    })
}

exports.signin = function (req, res, next) {
  let sourceName = 'authController.signin'
  let {username, password} = req.body

  if (!username ||
  !password) {
    return next(new ResponseError({type: 'error', message: 'required field is not filled', source: sourceName, status: 400}))
  }

  Session.findById(req.session.id, function (err, session) {
    if (err) return next(new Error(err.message))
    if (session) return next(new ResponseError({type: 'error', message: 'login has already been completed', source: sourceName, status: 400}))

    passport.authenticate('local', function (err, user, info) {
      if (err) { return next(err) }
      if (!user) {
        return next(new ResponseError({type: 'error', message: info, source: sourceName, status: 401}))
      }
      req.logIn(user, function (err) {
        if (err) { return next(err) }
        return res.send({type: 'ok', message: 'login seccessful'})
      })
    })(req, res, next)
  })
}

exports.signout = function (req, res, next) {
  let sourceName = 'authController.signout'
  Session.findById(req.session.id).exec()
    .then(sessin => {
      if (!sessin) return next(new ResponseError({type: 'error', message: 'login not yet done', source: sourceName, status: 401}))
      sessin.remove()
      req.session.destroy(() => {})
      req.logout()
      res.send({type: 'ok', message: 'logout seccessful'})
    })
    .catch(err => next(new Error(err.message)))
}
