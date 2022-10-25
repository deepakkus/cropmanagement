#!/usr/bin/env node
const db = require('../db/index');
//const nodeEnv = process.env.NODE_ENV || 'production';
//dotenv.config({ path: `${nodeEnv}.env` });

const app = require('./app');
const http = require('http');

const port = parseInt(process.env.PORT || '4000', 10);
app.set('port', port);

const server = http.createServer(app);
// TODO create https
server.listen(port);
console.log('server is listening on:', port);