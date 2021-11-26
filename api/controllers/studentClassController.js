const Users = require('../models/UsersModel')
const StudentClasses = require('../models/StudentClassesModel')
const validator = require('../services/validations/studentClassesValidator');

    exports.index = (req, res, next) => {
         
        Users.findAll({where: {categoria: "Aluno"}}).then((result)=>{
            res.send(result)
            next()
        }).catch((error)=>{
            error.push(error)
            next(error);
        })     
    }  

    exports.show = (req, res, next) => {
        let id = req.body.id 
        Users.findAll({where: {id: id}}).then(()=>{
            next()
        }).catch((error)=>{
            error.push(error)
            next(error);
        })
    };
    exports.insert  =  async (req, res, next) => {  

        const data = req.body
        console.log(data)
        if(await validator.studentClassesValidator(data.idClasses, data.idUsers)){
                      
            await  ProfessorClasses.create({
                idClasses: data.idClasses,
                idUsers: data.idUsers,
                    }).then(()=>{
                        next()
                    }).catch(()=>{
                        error.push(error)
                        next(error);
                    })

            
        }else{
            error.push(validator.error)
            next(error);
        }
                  
    };
    
    exports.destroy = (req, res, next) => {;
        let id = req.body.id;
        
        StudentClasses.destroy({where: {id: id}}).then((error)=>{
            next()
        }).catch(()=>{
            error.push(error)
            next(error);
        })
    };  

    
    
    