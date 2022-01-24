const http = require('http')

let server = http.createServer((req, res)=>{
    //linha de comando
    console.log('URL:', req.url)
    console.log('METHOD:', req.method)

    switch(req.url){
        case '/':
            res.statusCode = 200 //código OK
            res.setHeader('Content-Type', 'text/html') //cabeçalho
            res.end('<h1>Olá</h1>')
        break;

        case '/users':
            res.statusCode = 200 //código OK
            res.setHeader('Content-Type', 'application/json') //cabeçalho
            res.end(JSON.stringify({
                users: [{
                    name: 'Ana',
                    email: 'aaaa@gmail.com',
                    id: 1
                }]
            }))
        break;
    }
})

server.listen(3000, '127.0.0.1', ()=>{ //porta 3000, IP local
    console.log("Servidor rodando")
}) 