const usersController = require('../api/controllers/usersController')
const express = require('express')
const router = express.Router()
const {verifyJWT} = require('./midlewares')

router.post('/',usersController.insert)
router.get('/',verifyJWT,usersController.index)
router.delete('/',verifyJWT,usersController.destroy)

module.exports = router 