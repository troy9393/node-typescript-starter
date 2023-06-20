import express, { Express, Request, Response } from 'express';
import environment from './environment';
import createServer from './server';
import SequelizeConnection from './database/configuration';
import { db } from './database/models';

(async () => {
    await SequelizeConnection.connect();

    db.sequelize.sync({
        force: true, // drop-create and sync models
    });
})();
const app: Express = express();
const appPort: string = environment.APP_PORT;

createServer(app).routes().errorHandler().start(appPort);

process.on('SIGINT', () => {
    SequelizeConnection.close();
    process.exit();
});
