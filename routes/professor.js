const professorClassController = require('../api/controllers/professorClassController')
const express = require('express')
const router = express.Router()
const {verifyJWT} = require('./midlewares')

//professor
router.post('/',verifyJWT,professorClassController.insert)
router.get('/',verifyJWT,professorClassController.index)
router.delete('/',verifyJWT,professorClassController.destroy)

module.exports = router 