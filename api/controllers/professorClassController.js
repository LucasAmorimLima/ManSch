const Users = require('../models/UsersModel')
const ProfessorClasses = require('../models/ProfessorClassesModel')
const validator = require('../services/validations/professorClassesValidator');

    exports.index = (req, res, next) => {
         
        Users.findAll({where: {categoria: "Professor"}}).then((result)=>{
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
        if(await validator.professorClassesValidator(data.idClasses, data.idUsers)){
                      
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
        
        ProfessorClasses.destroy({where: {id: id}}).then((error)=>{
            next()
        }).catch(()=>{
            error.push(error)
            next(error);
        })
    };  

    
    
    