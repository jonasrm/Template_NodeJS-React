const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');
const config = require('./config/Parameters');

const server = express();

mongoose.connect(config.connectionString, {
    useCreateIndex: true,
    useNewUrlParser: true
});

var port = (process.env.PORT || config.api_port);
server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(port);
console.log(`Listenning http://localhost:${port}`);