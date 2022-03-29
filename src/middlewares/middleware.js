exports.middlewareGlobal = (req, res, next) => {
    console.log();
    console.log('Este middleware é global');
    console.log();
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
    if(err && 'EBADCSRFTOEIN' === err.code){
        return res.send('Erro CSRF token!');
    }
};

exports.csrfMiddleware = (err, req, res, next) => {
    res.locals.crsfToken = req.crsfToken();
    next();
};