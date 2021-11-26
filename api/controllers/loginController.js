const UsersModel = require('../models/UsersModel')
const {generateJWT} = require('../services/generateJWT')

exports.login  = async (req, res) => {
  res.render('login')
}; 
exports.insert  = async (req, res) => {
  res.render('admin/addCategoria')
  let {email,senha} = req.body
  await UsersModel.findAll().then((result)=>{
  return res.json({auth: true, id:result[0].id, name:result[0].name ,categoria: result[0].categoria, token: generateJWT(result[0].id)})
  }).catch((err)=>{
      console.log(err)
      res.status(400).end()
  })
}; 
