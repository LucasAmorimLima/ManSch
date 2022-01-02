require('express-async-errors');
const express = require('express')
const bodyParser = require('body-parser')
const classes = require('./routes/classes')
const login = require('./routes/login')
const user = require('./routes/user')
const student = require('./routes/student')
const professor = require('./routes/professor')
const {PORT} = require('./configs/constants/auth')
// create the server
    const app = express();
//configs
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
//rotas 
    app.use('/class',classes)
    app.use('/login',login)
    app.use('/user',user)
    app.use('/professor',professor)
    app.use('/student',student)


    app.listen(PORT,()=>console.log(`Server Started at Port ${PORT}
    => http://localhost:${PORT}`))