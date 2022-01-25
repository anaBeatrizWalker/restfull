let NeDB = require('nedb')
let db = new NeDB({ //criar o banco
    filename: 'users.db', //nome do arquivo
    autoload: true //assim que rodar o código, guarda
}) 

module.exports = app => {
    app.get('/users', (req, res)=>{

        //Lista usuários do banco
        db.find({}).sort({name:1}).exec((err, users)=>{
        //Objeto vazio para pegar todos os dados; ordena o resultado por nome na ordem crescente (1)

            if(err){
                console.log(`error: ${err}`)
                res.status(400).json({
                    error: err
                })
            }else{
                res.statusCode = 200 
                res.setHeader('Content-Type', 'application/json')
                res.json({ //Responde como Json
                    users:users //quando se tem uma chave do mesmo nome da variável, pode-se deixar só users
                })
            }
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