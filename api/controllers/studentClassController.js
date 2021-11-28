const Users = require('../models/UsersModel')
const StudentClasses = require('../models/StudentClassesModel')
const {studentClassesValidator,erro} = require('../services/validations/studentClassesValidator');

    exports.index = async (req, res, next) => {
         
        await Users.findAll({where: {categoria: "Aluno"}}).then((result)=>{
            
        }).catch((error)=>{
            exptions.push(500,error)
            next();
        })     
    }  

    exports.show = async (req, res, next) => {
        let id = req.body.id 
        await Users.findAll({where: {id: id}}).then(()=>{
            next()
        }).catch((error)=>{
            exptions.push(500,error)
            next();
        })
    };
    exports.insert  =  async (req, res, next) => {  

        const data = req.body
        console.log(data)
        if(await studentClassesValidator(data.idClasses, data.idUsers)){
                      
            await  ProfessorClasses.create({
                idClasses: data.idClasses,
                idUsers: data.idUsers,
            }).then(()=>{
                next()
            }).catch((error)=>{
                exptions.push(500,error)
                next();
            })

            
        }else{
            exptions.push(401,erro)
            next();
        }
                  
    };
    
    exports.destroy = async (req, res, next) => {;
        let id = req.body.id;
        
        await StudentClasses.destroy({where: {id: id}}).then((error)=>{
        }).catch((error)=>{
            exptions.push(500,error)
            next();
        })
    };  

    
    
    