const express = require('express')
const consign = require('consign')

let app = express()

consign().include('routes').into(app);
//Invoca o consign e inclui a pasta routes dentro de app e passa app para os arquivos

app.listen(3000, '127.0.0.1', ()=>{ //porta 3000, IP local
    console.log("Servidor rodando")
}) 