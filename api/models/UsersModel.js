const { DataTypes } = require('sequelize');
const connection = require('../../configs/connection')


const User = connection.sequelize.define('user', {
id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
    },
name: {
    type: DataTypes.STRING,
    allowNull: false
    },
senha:{
    type: DataTypes.STRING,
    allowNull: false
},
email: {
    type: DataTypes.STRING,
    allowNull: false
    },

categoria: {
    type: DataTypes.STRING,
    allowNull: false
    },
});

module.exports = User
//User.sync({force: true})