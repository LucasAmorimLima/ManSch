
const Users = require('../models/UsersModel')
const {userValidator,erro} = require('../services/validations/userValidator');
const {generateJWT} = require('../services/generateJWT')

    exports.index = async (req, res, next) => {
        await Users.findAll({order: [['id', 'ASC']],}).then((result)=>{
            return res.status(200).json(result)

        }).catch ((error) =>{            
            exptions.push(500,error)
            next();
        })     
    }  

    exports.show = async (req, res, next) => {
        let id = req.body.id 
        await Users.findAll({where: {id: id}
        }).then((result)=>{
            return res.status(200).json(result)
        }).catch((erro)=>{
            exptions.push(500,erro)
            next();
        })
            
    };
    exports.insert  =  async (req, res, next) => {  

        const data = req.body
        
        if(userValidator(data.name, data.senha, data.email, data.categoria)){
                          
            await  Users.create({
                name: data.name,
                senha: senha,
                email: data.email,
                categoria : data.categoria
            }).then(()=>{
                res.status(200).json(generateJWT({id :Users.id}))  
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
        
        await Users.destroy({where: {id: id}}).then((result)=>{
            return res.status(200).json(result)
        }).catch ((error) =>{
            exptions.push(500,error)
            next();
        })
    };  

    
    
    