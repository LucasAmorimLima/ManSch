const { DataTypes } = require('sequelize');
const conexao = require('../../configs/connection')


const StudentClasses = conexao.sequelize.define('aluno_turma', {
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

module.exports = StudentClasses
//StudentClasses.sync({force: true})