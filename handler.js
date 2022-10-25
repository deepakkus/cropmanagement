'use strict'
const serverless = require('serverless-http');
const app = require('./src/server/app');

const handler = serverless(app);
exports.handle = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    return await handler(event, context);
};
