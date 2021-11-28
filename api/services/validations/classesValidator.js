var erro = []
module.exports = {  
   
    classesValidator(nome,disciplinas,horarios,diaDaSemana) {
        
        if(nome==null || typeof nome == undefined){
            erro.push('Nome Inválido')
            console.log('nome')
        }
        if(disciplinas==null || typeof disciplinas == undefined){
            erro.push('Disciplina Inválida')
            
        }
        if(!(horarios === "Manhã") && !(horarios === "Tarde")){
            erro.push('Horário Inválido')
          
        }if(!(diaDaSemana === "Segunda-Feira") && !(diaDaSemana === "Terça-Feira") && !(diaDaSemana === "Quarta-Feira") && !(diaDaSemana === "Quinta-Feira") && !(diaDaSemana === "Sexta-Feira")){
            erro.push('Dia Inválido')
    
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
    erro: erro
}