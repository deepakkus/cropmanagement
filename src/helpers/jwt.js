const jwt = require('jsonwebtoken');
const error = require('./error');
const config = require('../config.json');
const APIError = error.APIError;

const generateToken = (data) => {
  const secret = process.env.JWT_PRIVATE_KEY.replace(/\\n/gm, '\n');
  return jwt.sign(data, secret, { algorithm: 'RS256', expiresIn: config.jwtExpiresIn});
}

const verifyToken = (token) => {
  const secret = process.env.JWT_PUBLIC_KEY.replace(/\\n/gm, '\n');
  return jwt.verify(token, secret, { algorithms: ['RS256'] });
}

const extractFromHeader = (request, index) => {
    if (!request.headers.authorization) {
      throw APIError('InvalidToken', 'Authorization header not found.');
    }
    // authorization: `Bearer ${token} ${userId}`
    const authHeaderValue = request.headers.authorization;

    if (!authHeaderValue.startsWith('Bearer')) {
      throw APIError('InvalidToken',
        `Authorization header is not of type 'Bearer'.`,
      );
    }
    const parts = authHeaderValue.split(' ');
    if (parts.length !== 3) {
        throw APIError('InvalidToken', 'Invalid header format');
    }      
    return parts[index];
}

module.exports = {
    generateToken,
    verifyToken,
    extractFromHeader
}