'use strict'

const express = require ('express');
const bodyParser = require('body-parser');
const mongoose =require('mongoose');

const app = express();
const router = express.Router();

mongoose.connect('mongodb+srv://nodestore:xxxxxx@nodew.dqfqbtu.mongodb.net/?retryWrites=true&w=majority&appName=nodew')

// Carregar as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

// Configurando o body-parser para interpretar solicitações JSON
app.use(bodyParser.json());

// Configurando o body-parser para interpretar solicitações de formulário
app.use(bodyParser.urlencoded({ extended: true }));



app.use('/', indexRoute);
app.use('/products', productRoute);


module.exports = app;