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
        res.json(req.body) //campos enviados via post
    })
}