require('express-async-errors');
const express = require('express')
const bodyParser = require('body-parser')
const classes = require('./routes/classes')
const login = require('./routes/login')
const user = require('./routes/user')
const student = require('./routes/student')
const professor = require('./routes/professor')
global.exeptions = []

// create the server
    const app = express();
//configs
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
//rotas 
    app.use('/turmas',classes)
    app.use('/login',login)
    app.use('/usuario',user)
    app.use('/professor',professor)
    app.use('/aluno',student)
//middleware error controller
app.use((error, req, res, next) => {

    res.status(exeptions[0]).send(exeptions[1])
    
})


const PORT = 8081
app.listen(PORT,()=>{

})