const express = require('express')
let routesIndex = require('./routes/index')
let routesUsers = require('./routes/users')

let app = express()

//usa mais um recurso do express
app.use(routesIndex)
app.use(routesUsers)

app.listen(3000, '127.0.0.1', ()=>{ //porta 3000, IP local
    console.log("Servidor rodando")
}) 