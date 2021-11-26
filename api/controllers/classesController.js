const Classes = require('../models/ClassesModel')
const validator = require('../services/validations/classesValidator');

    exports.index = (req, res, next) => {
        try {
            const result = Classes.findAll({order: [['id', 'ASC']],}) 
            next()
        } catch (error) {            
            error.push(error)
            next(error);
        }     
    }  

    exports.show = (req, res, next) => {
        let id = req.body.id 
        try {
            Classes.findAll({where: {id: id}
            });
        } catch (error) {
            error.push(error)
            next(error);
        }
    };
    exports.insert  = (req, res, next) => {  

        const data = req.body
        console.log(data)
        if(validator.classesValidator(data.name, data.disciplinas, data.horarios, data.diaDaSemana)){
            
            try{              
                Classes.create({
                    nome: data.name,
                    disciplinas: data.disciplinas,
                    horarios: data.horarios,
                    diaDaSemana: data.diaDaSemana
                    })
                next()
            }catch (error) {
                error.push(error)
                next(error);
            }
        }else{
            error.push(validator.error)
            next(error);
        }
                  
    };
  
    exports.destroy = (req, res, next) => {;
        let id = req.body.id;
        
        try {
            Classes.destroy({where: {id: id}});
        } catch (error) {
            error.push(error)
            next(error);
        }
    };  
    
    