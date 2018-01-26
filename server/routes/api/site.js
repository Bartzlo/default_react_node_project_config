const express = require('express')
const router = express.Router()

const site_controllers = require('../../controllers/siteControllers')

router.get('/profile', site_controllers.profile)
router.get('/public-page', site_controllers.publicPage)
router.get('/private-page', site_controllers.privatePage)

module.exports = router
