var express = require('express')
var router = express.Router()

const auth = require('./auth')
const site = require('./site')

router.use('/auth', auth)
router.use('/site', site)

module.exports = router
