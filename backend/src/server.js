const express = require('express');
const app = express()
const routes = require('./routes.js')
const port = 3001

app.use(express.json())
app.use(routes);
app.listen(port, () => console.log('Escutando a porta '+ port));