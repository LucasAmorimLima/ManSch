const Aluno = require('../../models/AlunoModel')
export function criarAluno() { 
    
                Aluno.create({
                nome: nomes,
                slug: slugs
        })
}

export function selecionarAlunnoPorId(id) {
    Aluno.findAll({
        where: {
          id: id
        }
      });
}

export function editarAluno() {
}
export function removerAlunoPorId(id) {   
    await Aluno.destroy({
        where: {
        id: id
        }
    });
}

