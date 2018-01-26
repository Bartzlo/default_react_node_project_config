const User = require('../models/User')

exports.signup = function (req, res, next) {
  let {username, email, password, passwordConf} = req.body

  if (!username ||
  !email ||
  !password ||
  !passwordConf) {
    let err = new Error('One of the required fields is not filled')
    err.source = 'authController.signup'
    err.status = 400
    return next(err)
  }

  if (password !== passwordConf) {
    let err = new Error('Passwords do not match')
    err.source = 'authController.signup'
    err.status = 400
    return next(err)
  }

  let user = new User(req.body)
  user.save(function (err, user) {
    if (err) {
      console.log(err.message)
      if (err.message.indexOf('duplicate key') >= 0 && err.message.indexOf('email') >= 0) {
        err.message = 'email ' + email + ' is already exist'
        err.source = 'authController.signup'
        err.status = 400
        return next(err)
      }
      if (err.message.indexOf('duplicate key') >= 0 && err.message.indexOf('username' >= 0)) {
        err.message = 'authController.signup: user name ' + username + ' is already exist'
        err.source = 'authController.signup'
        err.status = 400
        return next(err)
      }
      err.source = 'authController.signup'
      err.status = 500
      return next(err)
    }
    res.send({type: 'info', message: 'New user ' + username + ' was created'})
  })
}

exports.signin = function (req, res, next) {
  res.send('Login user')
}

exports.signout = function (req, res, next) {
  res.send('Logout user')
}
