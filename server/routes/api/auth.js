const express = require('express')
const router = express.Router()

const auth_controllers = require('../../controllers/authControllers')

router.post('/signup', auth_controllers.signup)
router.post('/signin', auth_controllers.signin)
router.post('/signout', auth_controllers.signout)
router.get('/check', auth_controllers.checkUser)

module.exports = router
