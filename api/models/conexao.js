const Sequelize = require('sequelize') 
const sequelize = new Sequelize('Escola','root','12345',{
        host: 'localhost',
        dialect: 'mysql'
    })
    sequelize.authenticate().then(function(){
        console.log("Banco conectado")
    }).catch(function(err){
        console.log("Falha ao logar no Servidor "+err)
    })
 
module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize

}