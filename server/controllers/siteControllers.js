exports.profile = function (req, res, next) {
  res.send({
    type: 'ok',
    message: 'profile page',
    arg: {
      userName: req.user.username,
      email: req.user.email,
      userGroup: req.user.group
    }
  })
}

exports.adminPage = function (req, res, next) {
  res.send({
    type: 'ok',
    message: 'admin page',
    arg: {
      text: 'Very secret admin info'
    }
  })
}

exports.publicPage = function (req, res, next) {
  res.send({
    type: 'ok',
    message: 'public page',
    agr: 'Simple public info'
  })
}
