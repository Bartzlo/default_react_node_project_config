const express = require('express')
const router = express.Router()

const auth_controllers = require('../../controllers/authControllers')

router.post('/signup', auth_controllers.signup)
router.get('/signin', auth_controllers.signin)
router.get('/signout', auth_controllers.signout)

module.exports = router
