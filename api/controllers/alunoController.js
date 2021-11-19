const Aluno = require('../repositories/Aluno/alunoRepository')

exports.mostrarAlunos = (req, res, next) => {
    res.status(200).send('Requisição recebida com sucesso!');
    
};


exports.mostrarAlunosPorId = (req, res, next) => {
    res.status(200).send('Requisição recebida com sucesso!');
};


exports.inserirAluno = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;

    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};