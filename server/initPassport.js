const bcrypt = require('bcrypt')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const User = require('./models/User')

module.exports.init = function () {
  // config GoogleStrategy
  passport.use('google',
    new GoogleStrategy({
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.OAUTH_CALLBACK_URL
    },
    function (accessToken, refreshToken, profile, done) {
      User.findOne({'google.id': profile.id}).exec()
        .then(user => {
          if (user) return user
          console.log('new user');
          user = new User()
          user.google.id = profile.id
          user.google.token = accessToken
          user.google.name = profile.displayName
          user.google.email = profile.emails[0].value
          return user.save()
        })
        .then(user => {
          user && done(null, user)
        })
        .catch(err => done(new Error(err.message)))
    }
    )
  )

  // config LocalStrategy
  passport.use('local',
    new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    },
    function (email, password, done) {
      let user
      User.findOne({ 'local.email': email }).exec()
        .then(res => {
          if (!res) throw (new Error('user not found'))
          user = res
          return bcrypt.compare(password, user.local.password)
        })
        .then(isComare => {
          if (!isComare) throw (new Error('incorrect password'))
          return done(null, user)
        })
        .catch(err => {
          if (err.message === 'user not found') return done(null, false, 'user not found')
          if (err.message === 'incorrect password') return done(null, false, 'incorrect password')
          console.log(err.stack)
          return done(err)
        })
    })
  )

  passport.serializeUser(function (user, done) {
    if (user) done(null, user.id)
  })

  passport.deserializeUser(function (id, done) {
    User.findById(id).exec()
      .then(user => done(null, user))
      .catch(err => done(err, false))
  })
}
