const classesController = require('../api/controllers/classesController')
const express = require('express')
const router = express.Router()
const {verifyJWT} = require('./midlewares')

router.get('/',verifyJWT,classesController.index)
router.post('/',verifyJWT,classesController.insert)
router.delete('/:id',verifyJWT,classesController.destroy)

module.exports = router 