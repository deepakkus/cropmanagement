const jwt  = require('../../helpers/jwt');
const error = require('../../helpers/error');
const APIError = error.APIError;

const authenticate = (req, res, next) => {
    try {
        const token = jwt.extractFromHeader(req, 1);
        const decoded = jwt.verifyToken(token);
        const userId = jwt.extractFromHeader(req, 2);
        if (decoded && decoded.accountId === userId) {
            next();
        } else {
            throw APIError('JsonWebTokenError');
        }        
    } catch (err) {
        next(err);
    }
}

module.exports = {
    authenticate
};