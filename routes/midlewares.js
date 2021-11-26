const jwt = require('jsonwebtoken')
const {SECRET} = require('../configs/constants/auth')
//middleware Jwt controller
function verifyJWT  (req,res,next){
    const token = req.headers['x-access-token']
    jwt.verify(token, SECRET, (err,decode)=>{
        if(err) return res.status(401).end     
        req.userId = decode.userId
        next()
    })
}
module.exports ={
    verifyJWT
}