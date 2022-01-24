const express = require('express')

let app = express()

app.get('/', (req, res)=>{
    res.statusCode = 200 //código OK
    res.setHeader('Content-Type', 'text/html') //cabeçalho
    res.end('<h1>Olá</h1>')
})

app.get('/users', (req, res)=>{
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

app.listen(3000, '127.0.0.1', ()=>{ //porta 3000, IP local
    console.log("Servidor rodando")
}) 