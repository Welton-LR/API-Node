'use strict'
const app = require('../src/app');
const http = require('http');
const debug = require('debug')('API-Node : server');
const express = require('express');


const port = normalizePort(process.env.PORT || '3000');
const server = http.createServer(app);

server.listen(port);

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)){
        return val;
    }

    if (port >=0) {
        return port;
    }

    return false;
}
console.log("API rodando na porta " + port);
