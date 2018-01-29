const passport = require('passport')
const express = require('express')
const router = express.Router()

const isAuth = require('../../middleware').isAuth
const site_controllers = require('../../controllers/siteControllers')

router.get('/profile', isAuth(), site_controllers.profile)
router.get('/admin-page', isAuth(['admin']), site_controllers.adminPage)
router.get('/public-page', site_controllers.publicPage)

module.exports = router
