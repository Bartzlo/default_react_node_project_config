const User = require('../models/User')
const ResponseError = require('../lib/ResponseError')

exports.signup = function (req, res, next) {
  let {username, email, password, passwordConf} = req.body
  let sourceName = 'authController.signup'

  if (!username ||
  !email ||
  !password ||
  !passwordConf) {
    return next(new ResponseError({type: 'error', text: 'required field is not filled', source: sourceName, status: 400}))
  }

  if (password !== passwordConf) {
    return next(new ResponseError({type: 'error', text: 'passwords do not match', source: sourceName, status: 400}))
  }

  let user = new User(req.body)
  user.save(function (err, user) {
    if (err) {
      if (err.message.indexOf('duplicate key') >= 0 && err.message.indexOf('email') >= 0) {
        return next(new ResponseError({type: 'error', text: 'duplicate email', arg: email, source: sourceName, status: 400}))
      }
      if (err.message.indexOf('duplicate key') >= 0 && err.message.indexOf('username' >= 0)) {
        return next(new ResponseError({type: 'error', text: 'duplicate username', arg: username, source: sourceName, status: 400}))
      }

      return next(new Error(err.message))
    }

    res.send({type: 'ok', text: 'new user created', arg: username, source: sourceName})
  })
}

exports.signin = function (req, res, next) {
  res.send('Login user')
}

exports.signout = function (req, res, next) {
  res.send('Logout user')
}
