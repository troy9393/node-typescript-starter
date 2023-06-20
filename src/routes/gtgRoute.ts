import express, { Request, Response, Router } from 'express';
import env from '../environment';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        version: '1.0.0',
        environment: env.APP_ENVIRONMENT,
        status: 'up',
    });
});

export default router;
