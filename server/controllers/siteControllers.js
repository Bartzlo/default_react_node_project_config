exports.profile = function (req, res, next) {
  res.send('User profile page')
}

exports.publicPage = function (req, res, next) {
  res.send('Public page')
}

exports.privatePage = function (req, res, next) {
  res.send('Private page')
}
