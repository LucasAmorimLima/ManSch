let erro = []
const Users = require('../../models/UsersModel')
const StudentClasses = require('../../models/StudentClassesModel')
const Classes = require('../../models/ClassesModel')
let studentClasses,professor,classes

async function studentClassesValidator (idClasses,idUsers)  {
          
        console.log('quase no banco')
        resultStudentClasses =  StudentClasses.count();
        await resultStudentClasses.then((response)=>{
            studentClasses = response
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

        console.log(studentClasses,classes,professor)
        if(professor!=1){
            erro.push("Professor não cadastrado")
            console.log('Professor não cadastrado')
        }
        if(studentClasses>30){
            erro.push("Esta sala está cheia")
            console.log('Esta sala está cheia')
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
    studentClassesValidator,
    erro
}
