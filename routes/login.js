const ControllerLogin = require('../api/controllers/loginController.js')
const express = require('express')
const router = express.Router()

router.post('/',ControllerLogin.insert)

module.exports = router 