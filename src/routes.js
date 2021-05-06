import { Router } from 'express';
import UserController from './database/controllers/UserController';

const routes = Router();

routes.post('/user', UserController.store);
routes.get('/users', UserController.store);

export default routes;
