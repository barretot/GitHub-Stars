import { Router } from 'express';
import UserControler from './database/app/controllers/UserController';

const routes = Router();

routes.post('/test', UserControler.store);
routes.get('/test2', UserControler.index);

export default routes;
