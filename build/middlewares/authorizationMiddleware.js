"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function authorizationMiddleware(req, res, next) {
    const urlPath = req.url;
    const authorizationToken = req.headers['authorization'];
    if (urlPath.startsWith('/api') && !authorizationToken) {
        res.status(401).json({ message: 'invalid_authorization_token' });
        return;
    }
    next();
    console.log('simple middleware end');
}
exports.default = authorizationMiddleware;
