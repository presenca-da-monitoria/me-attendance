const express = require('express');
const routes = express.Router();

routes.post('/artur', (req,res) => {
    const { nome, matricula, turma, data } = req.body
    
    if(nome && matricula && turma && data){
        return res.status(200).json({status: "Recebido"})
    }
    return res.status(401).json({mensagem: "inválido"})

    // res.send( {
    //     "data": formatDate.format(new Date()),
    //     "nome": nome,
    //     "matricula": matricula,
    //     "turma": turma
    // })
})

routes.get('/dante', (req,res) => {
    res.send('página de dante');
})

routes.get('/pedro', (req,res) => {
    res.send('página de paz');
})

routes.get('/raquel', (req,res) => {
    res.send('página de raquel');
})


module.exports = routes;