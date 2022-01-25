let NeDB = require('nedb')
let db = new NeDB({ //criar o banco
    filename: 'users.db', //nome do arquivo
    autoload: true //assim que rodar o código, guarda
}) 

module.exports = app => {

    let route = app.route('/users') //assim não precisa especificar a rota em cada método

    route.get((req, res)=>{

        //Lista usuários do banco
        db.find({}).sort({name:1}).exec((err, users)=>{
        //Objeto vazio para pegar todos os dados; ordena o resultado por nome na ordem crescente (1)

            if(err){
                app.utils.erro.send(err, req, res)
            }else{
                res.statusCode = 200 
                res.setHeader('Content-Type', 'application/json')
                res.json({ 
                    users
                })
            }
        })
    })

    route.post((req, res)=>{

        db.insert(req.body, (err, user)=>{
            if(err){
                app.utils.erro.send(err, req, res)
            } else{
                res.status(200).json(user)
            }
        })
    })
}