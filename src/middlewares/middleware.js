exports.middlewareGlobal = (req, res, next) => {
    console.log();
    console.log('Este middleware é global');
    console.log();
    next();
};