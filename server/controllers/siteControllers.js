exports.profile = function (req, res, next) {
  res.send({
    type: 'ok',
    message: 'profile page',
    arg: {
      name: req.user.username,
      email: req.user.email,
      group: req.user.group
    }
  })
}

exports.adminPage = function (req, res, next) {
  res.send({
    type: 'ok',
    message: 'admin page',
    arg: 'Very secret admin info'
  })
}

exports.publicPage = function (req, res, next) {
  res.send({
    type: 'ok',
    message: 'public page',
    agr: 'Simple public info'
  })
}
