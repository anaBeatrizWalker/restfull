const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

let app = express()

//Interpretando o que está no post
app.use(bodyParser.urlencoded({ extended: false })); //Consegue entender independente da codificação
app.use(bodyParser.json()); //Todos os dados que receber via post, converte em json

consign().include('routes').into(app);
//Invoca o consign e inclui a pasta routes dentro de app e passa app para os arquivos

app.listen(3000, '127.0.0.1', ()=>{ //porta 3000, IP local
    console.log("Servidor rodando")
}) 