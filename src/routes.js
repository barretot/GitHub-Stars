const { Router } = require('express');

const RepositoryController = require('./database/app/controllers/RepositoryController');

const routes = Router();

routes.post('/api/repositories', RepositoryController.store);

routes.post('/api/repositories/tags', RepositoryController.storeTags);
routes.post('/api/repositories/stars/tags', RepositoryController.getRepoStars);
routes.get('/api/repositories', RepositoryController.index);

routes.delete('/api/users/repositories/:id', RepositoryController.destroy);

module.exports = routes;
