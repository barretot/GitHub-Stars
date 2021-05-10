import { Router } from 'express';
import RepositoryController from './database/app/controllers/RepositoryController';

const routes = Router();

routes.post('/api/repositorie', RepositoryController.store);
routes.get('/api/repositories/tags', RepositoryController.storeTags);

routes.get('/api/repositories/stars', RepositoryController.getRepoStars);

routes.get('/api/repositories', RepositoryController.index);
routes.delete('/api/repositorie/:id', RepositoryController.destroy);

export default routes;
