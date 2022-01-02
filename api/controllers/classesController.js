const Classes = require('../models/ClassesModel')
const {classesValidator,erro} = require('../services/validations/classesValidator');

    exports.index = async (req, res, next) => {
        
        await Classes.findAll({order: [['id', 'ASC']],}).then(()=>{
            return res.status(200).json(result)
        }).catch ((error)=> {            
            exptions.push(500,error)
            next();
        })
    }  

    exports.show = async (req, res, next) => {
        let id = req.body.id 
        
        await Classes.findAll({where: {id: id}}).then((result)=>{
            return res.status(200).json(result)
        }).catch ((error)=> {
            exptions.push(500,error)
            next();
        })
    };
    exports.insert  = async (req, res, next) => {  

        const data = req.body

        if(classesValidator(data.name, data.disciplinas, data.horarios, data.diaDaSemana)){            
            await Classes.create({
                nome: data.name,
                disciplinas: data.disciplinas,
                horarios: data.horarios,
                diaDaSemana: data.diaDaSemana
            }).then((result)=>{
                return res.status(200).json(result)
            }).catch((error)=> {
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
        await Classes.destroy({where: {id: id}}).then((result)=>{
            return res.status(200).json(result)
        }).catch ((error)=> {
            exptions.push(500,error)
            next();
        })
    };  
    
    