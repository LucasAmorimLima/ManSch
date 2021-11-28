const { DataTypes } = require('sequelize');
const conexao = require('../../configs/connection')


const ProfessorClasses = conexao.sequelize.define('professor_turma', {
  // Model attributes are defined here
  idClasses: {
    type: DataTypes.INTEGER,
    references: {model: 'turmas' , key: 'id'},
    onDelete: 'CASCADE',
    allowNull: false
  },   
  idUsers: {
    type: DataTypes.INTEGER,
    references: {model: 'users' , key: 'id'},
    onDelete: 'CASCADE',
    allowNull: false
  }
});

module.exports = ProfessorClasses
//ProfessorClasses.sync({force: true})