
const Users = require('../models/UsersModel')
const validator = require('../services/validations/userValidator');
const {generateJWT} = require('../services/generateJWT')
    exports.index = (req, res, next) => {
        try {
            const result = Users.findAll({order: [['id', 'ASC']],}) 
            next()
        } catch (error) {            
            error.push(error)
            next(error);
        }     
    }  

    exports.show = (req, res, next) => {
        let id = req.body.id 
        try {
            Users.findAll({where: {id: id}
            });
        } catch (error) {
            error.push(error)
            next(error);
        }
    };
    exports.insert  =  async (req, res, next) => {  

        const data = req.body
        console.log(data)
        if(validator.userValidator(data.name, data.cpf, data.email, data.categoria)){
            try{              
                await  Users.create({
                        name: data.name,
                        cpf: data.cpf,
                        email: data.email,
                        categoria : data.categoria
                    })
                res.send(generateJWT({id :Users.id}))    
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
        
        Users.destroy({where: {id: id}}).then((result)=>{
 
        }).catch ((error) =>{
            error.push(error)
            next(error);
        })
    };  

    
    
    