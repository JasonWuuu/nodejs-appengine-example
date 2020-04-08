'use strict';

const server = require('./server')();
// const config = require('./configs'); // 本项目使用了dotenv就不需要再使用configs了。

// server.create(config);
// server.start();
server.create();

module.exports = server.start(); //for unit testing
