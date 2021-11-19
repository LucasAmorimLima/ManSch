const { DataTypes } = require('sequelize');
const conexao = require('./conexao')


const Aluno = conexao.sequelize.define('aluno', {
  // Model attributes are defined here
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Aluno
//Categoria.sync({force: true})