let NeDB = require('nedb')
let db = new NeDB({ //criar o banco
    filename: 'users.db', //nome do arquivo
    autoload: true //assim que rodar o código, guarda
}) 

module.exports = app => {
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
    
    app.get('/users/admin', (req, res)=>{
        res.statusCode = 200 //código OK
        res.setHeader('Content-Type', 'application/json') //cabeçalho
        res.json({
            users: []
        })
    })

    app.post('/users', (req, res)=>{

        db.insert(req.body, (err, user)=>{
            if(err){
                console.log(`erro: ${err}`)
                res.status(400).json({
                    error: err
                })
            } else{
                res.status(200).json(user)
            }
        })
    })
}