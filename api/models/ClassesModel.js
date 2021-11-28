const { DataTypes } = require('sequelize');
const conexao = require('../../configs/connection')


const Turma = conexao.sequelize.define('turmas', {
  // Model attributes are defined here
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  disciplinas: {   
    type: DataTypes.STRING,
    allowNull: false
  },
  horarios: {
    type: DataTypes.STRING,
    allowNull: false
  },
  diaDaSemana:{
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Turma
//Turma.sync({force: true})