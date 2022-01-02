const { next } = require('cheerio/lib/api/traversing');
const UsersModel = require('../models/UsersModel')
const {generateJWT} = require('../services/generateJWT')

exports.insert  = async (req, res) => {
  let {email,senha} = req.body

  await UsersModel.findAll({where:{ email: email, senha: senha}})
  .then((result)=>{

  return res.status(200).json({auth: true, id:result[0].id, name:result[0].name ,categoria: result[0].categoria, token: generateJWT(result[0].id)})

    }).catch(()=>{
      exeptions.push(401,"Usuario inválido ou inexistente")      
      next()
    })
}; 
