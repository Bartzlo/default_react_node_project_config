const passport = require('passport')
const User = require('../models/User')
const Session = require('../models/Session')
const ResponseError = require('../lib/ResponseError')

exports.signup = function (req, res, next) {
  let {username, email, password, passwordConf} = req.body
  let sourceName = 'authController.signup'

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
      res.send({type: 'ok', message: 'new user created', arg: user.username, source: sourceName})
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
  console.log(req.cookies);
  res.send({mess: 'qwe'})
  // Session.findById(req.session.id, function (err, session) {
  //   if (err) return next(new Error(err.message))
  //   if (session) return next(new ResponseError({type: 'error', message: 'authentication has already been completed', status: 400}))

  //   passport.authenticate('local', function (err, user, info) {
  //     if (err) { return next(err) }
  //     if (!user) {
  //       return next(new ResponseError({type: 'error', message: info, source: sourceName, status: 401}))
  //     }
  //     req.logIn(user, function (err) {
  //       if (err) { return next(err) }
  //       return res.send(user)
  //     })
  //   })(req, res, next)
  // })
}

exports.signout = function (req, res, next) {
  res.send('Logout user')
}
