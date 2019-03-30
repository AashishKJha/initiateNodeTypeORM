import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import multer from 'multer';
import appRoute from '../index.route';

export default class ExpressConfig {
    expressApp = express();

    constructor() {
        this.expressApp.use(morgan('dev'));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: true }));
        this.expressApp.use(cookieParser());
        this.expressApp.use(express.static('public'));
        this.expressApp.use(multer({ dest: '/uploads/' }).any());
        this.expressApp.listen(3300, () => {
            console.log('Server Running On Port 3300');
        });
    }

    initiateRoutes() {
        this.expressApp.use(appRoute);
    }

    getApp() {
        return this.expressApp;
    }
}
