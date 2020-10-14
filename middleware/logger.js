//@descrip logs request to console
const logger = (req, res, next) => {
    console.log(`The method was: ${req.method} and the URL was: ${req.protocol}://${req.get("host")}${req.originalUrl}`);
    next();
}

module.exports = logger;