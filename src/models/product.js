'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating the product shema.
const schema = new Schema({

    title: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
        defaut: true,
    },
    tags: [{
        type: String,
        required: true,
    }]
});


module.exports = mongoose.model('Product', schema);

