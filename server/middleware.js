const ResponseError = require('./lib/ResponseError')

exports.isAuth = function (group = []) {
  return (
    function (req, res, next) {
      if (!req.isAuthenticated()) {
        return next(new ResponseError({type: 'error', message: 'need authorization', status: 401}))
      }

      let isChecked = true
      if (group.length > 0) {
        isChecked = !!group.find(val => val === req.user.group)
      }

      if (!isChecked) {
        return next(new ResponseError({type: 'error', message: 'not enough rights', arg: req.user.group, status: 401}))
      }

      next()
    }
  )
}
