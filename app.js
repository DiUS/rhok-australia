'use strict';

var restify = require('restify');
var server = restify.createServer();

server.name = 'RHoK Australia';
server.use(restify.acceptParser(server.acceptable));
server.use(restify.CORS());
server.use(restify.dateParser());
server.use(restify.queryParser());
server.use(restify.gzipResponse());
server.use(restify.bodyParser());

var eventsRouter = require('./routes/events')(server);

module.exports = server;
