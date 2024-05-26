'use strict'
const mongoose = require('mongoose');
const Product = mongoose.model('Product');



exports.post = (req, res, next) => {
    var product = new Product(
        {
            title: req.body.title,
            slug: req.body.slug,
            description: req.body.description,
            price: req.body.price,
            active: req.body.active,
            tags: req.body.tags
            
        }
    );

    product.save()
    .then(x =>{
        res.status(201).send(
            {message : 'Produto cadastrado com sucesso'});
    })
    .catch(e =>{
        res.status(400).send(
            {message : 'Falha ao cadastrar o produto', data: e});
    });
    
};

exports.put = (req, res, next) => {
    const id =req.params.id;
    res.status(201).send({
        id : id,
        item : req.body
    });
};

exports.delete = (req, res, next) => {
    res.status(204).send(req.body);
}
