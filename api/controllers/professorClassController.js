const Users = require('../models/UsersModel')
const ProfessorClasses = require('../models/ProfessorClassesModel')
const {professorClassesValidator,erro} = require('../services/validations/professorClassesValidator');

    exports.index = async (req, res, next) => {
         
        await Users.findAll({where: {categoria: "Professor"}}).then((result)=>{
            return res.status(200).json(result)
        }).catch((error)=>{
            exptions.push(500,error)
            next();
        })     
    }  

    exports.show = async (req, res, next) => {
        let id = req.body.id 
        await Users.findAll({where: {id: id}}).then(()=>{
            return res.status(200).json(result)
        }).catch((error)=>{
            exptions.push(500,error)
            next();
        })
    };
    exports.insert  =  async (req, res, next) => {  

        const data = req.body
        console.log(data)
        if(await professorClassesValidator(data.idClasses, data.idUsers)){
                   
            await  ProfessorClasses.create({
                idClasses: data.idClasses,
                idUsers: data.idUsers,
            }).then(()=>{
                return res.status(200).json(result)
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
        
        await ProfessorClasses.destroy({where: {id: id}}).then((result)=>{
            return res.status(200).json(result)
        }).catch((error)=>{
            exptions.push(500,error)
            next();
        })
    };  

    
    
    