const express = require('express')
const router = express.Router()

const isAuth = require('../../lib/middlewares').isAuth
const siteControllers = require('../../controllers/siteControllers')

router.get('/profile', isAuth(), siteControllers.profile)
router.get('/admin-page', isAuth(['admin', 'moderator']), siteControllers.adminPage)
router.get('/public-page', siteControllers.publicPage)

module.exports = router
