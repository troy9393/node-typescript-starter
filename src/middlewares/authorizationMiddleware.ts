import { Request, Response, NextFunction } from 'express';

function authorizationMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const urlPath = req.url;
    const authorizationToken = req.headers['authorization'];
    if (urlPath.startsWith('/api') && !authorizationToken) {
        res.status(401).json({ message: 'invalid_authorization_token' });
        return;
    }
    next();
    console.log('simple middleware end');
}

export default authorizationMiddleware;
