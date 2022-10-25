const errorHandler = (err, req, res, next) => {
    //console.log(err);    
    if (typeof (err) === 'string') {
        // custom application error
        return res.status(400).json({ message: err });
    }

    if (err.name === 'BadRequestFormat' || err.name === 'ValidatorError') {
        // something wrong with request values, some params missing, mongoose validation error etc
        return res.status(400).json({ message: err.message ? 'BadRequestFormat:' + err.message : 'BadRequestFormat:Request format is not valid.' });
    }

    if (err.name === 'TokenExpiredError' || err.name === 'JsonWebTokenError') {
        // jwt authentication error
        return res.status(401).json({ message: err.message ? err.message : err.name+':Invalid Token, session expired' });
    }

    if (err.name === 'MongoError' && err.errmsg && err.errmsg.indexOf('duplicate key') !== -1) {
        // user credentials are wrong
        return res.status(500).json({ message: 'Data with this key already exists.' + err.errmsg });
    }

    if (res.status && res.status instanceof Function) {
        // default to 500 server error
        return res.status(500).json({ message: err.message });
    }
    if (next && next instanceof Function) {
        return next();
    }
}

module.exports = {
    errorHandler
};