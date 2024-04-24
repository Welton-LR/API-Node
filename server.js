'use strict'

const http = require('http');
const debug = require('debug')('API-Node : server');
const express = require('express');

const app = express();
const port = 3000;
app.set('port, port');

const server = http.createServer(app);
const router = express.Router();