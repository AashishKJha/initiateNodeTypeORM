import express from 'express';
import InsertIntoDB from './auth/insert';
import SelectData from './auth/register';
import UploadFile from './auth/file-upload';

const appRoute = express.Router();

appRoute.route('/user').post(InsertIntoDB.insert).get(SelectData.getUser);
appRoute.post('/file-upload', UploadFile.upload);

export default appRoute;
