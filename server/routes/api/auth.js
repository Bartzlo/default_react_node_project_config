const express = require('express')
const passport = require('passport')
const router = express.Router()

const auth_controllers = require('../../controllers/authControllers')

router.post('/signup', auth_controllers.signup)
router.post('/signin', auth_controllers.signin)
router.get('/signout', auth_controllers.signout)

module.exports = router
