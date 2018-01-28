const express = require('express')
const passport = require('passport')
const router = express.Router()

const auth_controllers = require('../../controllers/authControllers')

router.post('/signup', auth_controllers.signup)
router.get('/signin', auth_controllers.signin) // FIXME: post
router.get('/signout', auth_controllers.signout)

module.exports = router
