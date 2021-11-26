const studentClassController = require('../api/controllers/studentClassController')
const express = require('express')
const router = express.Router()
const {verifyJWT} = require('./midlewares')


//student
router.post('/',verifyJWT,studentClassController.insert)
router.get('/',verifyJWT,studentClassController.index)
router.delete('/',verifyJWT,studentClassController.destroy)

module.exports = router 