var erro = []
module.exports = {
   
    classesValidator(nome,disciplinas,horarios,diaDaSemana) {
        console.log('quase no banco')
        if(nome==null || typeof nome == undefined){
            erro.push('Nome Inválido')
            console.log('nome')
        }
        if(disciplinas==null || typeof disciplinas == undefined){
            erro.push('Disciplina Inválida')
            console.log('disciplina')
        }
        if(!(horarios === "Manhã") && !(horarios === "Tarde")){
            erro.push('Horário Inválido')
            console.log('hora')
        }if(!(diaDaSemana === "Segunda-Feira") && !(diaDaSemana === "Terça-Feira") && !(diaDaSemana === "Quarta-Feira") && !(diaDaSemana === "Quinta-Feira") && !(diaDaSemana === "Sexta-Feira")){
            erro.push('Dia Inválido')
            console.log('dia')
        }
        if(erro.length>0){
            console.log("error")
            return false      
        }
        else{
            console.log("passou")
            return true
        }
    },
    error: erro
}