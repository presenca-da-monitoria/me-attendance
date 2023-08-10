const express = require('express');
const routes = express.Router();

routes.post('/artur', (req,res) => {
    const { nome, matricula, turma, } = req.body
    
    const formatDate = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
    })

    res.send( {
        "data": formatDate.format(new Date()),
        "nome": nome,
        "matricula": matricula,
        "turma": turma
    })
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