import express from 'express';
import appRoute from './app/approute';

const mainRoute = express.Router();

mainRoute.use('/app', appRoute);

export default mainRoute;
