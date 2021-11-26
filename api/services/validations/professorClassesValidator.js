let erro = []
const Users = require('../../models/UsersModel')
const ProfessorClasses = require('../../models/ProfessorClassesModel')
const Classes = require('../../models/ClassesModel')
let professorClasses,professor,classes

async function professorClassesValidator (idClasses,idUsers)  {
          
        console.log('quase no banco')
        resultProfessorClasses =  ProfessorClasses.count({where: {idUsers: idUsers}});
        await resultProfessorClasses.then((response)=>{
            professorClasses = response
        }).catch((err)=>{
            erro.push(err)
        })
        resultProfessor =  Users.count({where: {id: idUsers}});
        await resultProfessor.then((response)=>{
            professor = response
        }).catch((err)=>{
            erro.push(err)
        })
        resultClasses =  Classes.count({where: {id: idClasses}});
        await resultClasses.then((response)=>{
            classes = response
        }).catch((err)=>{
            erro.push(err)
        })
        console.log(professorClasses,classes,professor)
        if(professor!=1){
            erro.push("Professor não cadastrado")
            console.log('Professor não cadastrado')
        }
        if(professorClasses!=0){
            erro.push("Esta sala já possui um professor")
            console.log('Esta sala já possui um professor')
        }
        if(classes!=1){
            erro.push("Esta sala não existe")
            console.log('Esta sala não existe')
        }
        if(erro.length>0){
            console.log("error")
            return false      
        }
        else{
            console.log("passou")
            return true
        }
    }
    
module.exports = 
{
    professorClassesValidator,
    erro
}
