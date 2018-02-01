const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  group: {
    type: String,
    default: 'user'
  },
  local: {
    username: {
      type: String,
      unique: true
    },
    email: {
      type: String,
      unique: true
    },
    password: String
  },
  google: {
    id: String,
    token: String,
    email: String,
    name: String
  }
})

/**
 * Hashing password for loclcal user accounts
 */

userSchema.pre('save', function (next) {
  if (this.local.password) {
    bcrypt.hash(this.local.password, 10)
      .then(res => {
        this.local.password = res
        next()
      })
      .catch(err => next(err))
  } else {
    next()
  }
})

module.exports = mongoose.model('users', userSchema)
