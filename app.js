const express = require('express')
const admin = require('./routes/aluno')
const app = express()
// configurações 

//rotas 
    app.use('/aluno',admin)
    app.use('/login',login)
const PORT = 8081
app.listen(PORT,()=>{
    //implementações
})