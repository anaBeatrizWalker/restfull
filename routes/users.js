let express = require('express')
let routes = express.Router()

routes.get('/users', (req, res)=>{
    res.statusCode = 200 //código OK
    res.setHeader('Content-Type', 'application/json') //cabeçalho
    res.json({
        users: [{
            name: 'Ana',
            email: 'aaaa@gmail.com',
            id: 1
        }]
    })
})

routes.get('/users/admin', (req, res)=>{
    res.statusCode = 200 //código OK
    res.setHeader('Content-Type', 'application/json') //cabeçalho
    res.json({
        users: []
    })
})

module.exports = routes