const jwt = require("jsonwebtoken");
const { globalMiddleware } = require("../middlewares/globalMiddleware");

exports.verifyToken = (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) return next(globalMiddleware(401, "There is no token"));

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return next(globalMiddleware(403, "Invalid token"));
        req.user = user; // Corrected assignment
        next();
    });
};

exports.verifyUser = (req, res, next) => {
    exports.verifyToken(req, res, () => { // Corrected function call
        if (req.user && (req.user.id === req.params.id || req.user.isAdmin)) {
            next();
        } else {
            next(globalMiddleware(401, "You are not authorized, Invalid Token")); // Corrected error handling
        }
    });
};

exports.verifyAdmin = (req, res, next) => {
    exports.verifyToken(req, res, () => { // Corrected function call
        if ( req.user && req.user.isAdmin) {
            next();
        } else {
            next(globalMiddleware(401, "You are not admin")); // Corrected error handling
        }
    });
};