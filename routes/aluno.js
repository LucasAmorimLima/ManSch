const ControllerAlunos = require('../api/controllers/alunoController')
const express = require('express')
const router = express.Router()

router.get('/exibirAlunos',ControllerAlunos.mostrarAlunos)
router.post('/cadrastrarAluno',ControllerAlunos.inserirAluno)
module.exports = router 