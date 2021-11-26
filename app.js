require('express-async-errors');
const express = require('express')
const bodyParser = require('body-parser')
const {engine} = require('express-handlebars')
const path = require('path')
const classes = require('./routes/classes')
const login = require('./routes/login')
const user = require('./routes/user')
const student = require('./routes/student')
const professor = require('./routes/professor')
global.error = []
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
    res.status(500).send(error)
})
//Handlebars
app.engine('handlebars', engine())
app.set('view engine','handlebars')
//path
app.use(express.static(path.join(__dirname,'public')))

const PORT = 8081
app.listen(PORT,()=>{

})