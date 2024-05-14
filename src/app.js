'use strict'

const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const index = require('./routes/index');

// Configurando o body-parser para interpretar solicitações JSON
app.use(bodyParser.json());

// Configurando o body-parser para interpretar solicitações de formulário
app.use(bodyParser.urlencoded({ extended: true }));

const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
})

const put = router.put('/:id', (req, res, next) => {
    const id =req.params.id;
    res.status(200).send({
        id : id,
        item : req.body
    });
})

const del = router.delete('/', (req, res, next) => {
    res.status(200).send(req.body);
})

app.use('/', index);
app.use('/products', create);
app.use('/products', put);
app.use('/products', del);

module.exports = app;