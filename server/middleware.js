const ResponseError = require('./lib/ResponseError')

exports.isAuth = function (groups = []) {
  return (
    function (req, res, next) {
      if (!req.isAuthenticated()) {
        return next(new ResponseError({type: 'error', message: 'need authorization', status: 401}))
      }

      let isChecked = true
      if (groups.length > 0) {
        isChecked = !!groups.find(val => val === req.user.group)
      }

      if (!isChecked) {
        return next(new ResponseError({
          type: 'error',
          message: 'not enough rights',
          arg: {
            userName: req.user.username,
            userGroup: req.user.group,
            groupList: groups
          },
          status: 401
        }))
      }

      next()
    }
  )
}
