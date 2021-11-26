const cpfValidator = require('./cpfValidator')
var erro = []
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
module.exports = {

    userValidator(name,cpf,email,categoria) {
        if(name==null || typeof name == undefined){
            erro.push('Nome Inválido')
        }
        if(!(categoria === "Aluno") && !(categoria === "Professor")){
            erro.push('Categoria Inválida')
        }
        if(cpfValidator.validateCpf(cpf)==false){
            erro.push('CPF Inválido')
        }
        if(validateEmail(email)==false){
            erro.push('email Inválido')
        }
        if(erro.length>0){
            
            return false
        }
        else{
            return true
        }
    },
    error: erro
}
