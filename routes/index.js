let express = require('express')
let routes = express.Router() //recursos de rotas do express

routes.get('/', (req, res)=>{
    res.statusCode = 200 //código OK
    res.setHeader('Content-Type', 'text/html') //cabeçalho
    res.end('<h1>Olá</h1>')
})

module.exports = routes