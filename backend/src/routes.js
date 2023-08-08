const express = require('express');
const routes = express.Router();

routes.post('/artur', (req,res) => {
    const { nome, matricula } = req.body
    res.send(nome);
})

routes.get('/daniel', (req,res) => {
    res.send('página de daniel');
})

routes.get('/dante', (req,res) => {
    res.send('página de dante');
})

routes.get('/paz', (req,res) => {
    res.send('página de paz');
})

routes.get('/raquel', (req,res) => {
    res.send('página de raquel');
})


module.exports = routes;