const request = require('supertest');

const Repository = require('../../src/database/app/models/Repository');

const app = require('../../src/app');

describe('Insert a github user and their repositories with or without stars and filter by tags.', () => {
  beforeAll(async () => {
    await Repository.create({
      github_username: 'test',
    });
    await Repository.collection.drop();
  });
  it('Insert user and their repositories.', async () => {
    const response = await request(app).post('/api/repositories').send({
      github_username: 'barretot',
    });

    expect(response.status).toBe(200);
  });
  it('Get repositories by tags.', async () => {
    const response = await request(app)
      .post('/api/repositories/tags')
      .send({
        github_username: 'barretot',
        tags: ['Elixir', 'JavaScript'],
      });
    expect(response.status).toBe(200);
  });
  it('Get user repositories.', async () => {
    const response = await request(app).post('/api/repositories/tags').send({
      github_username: 'barretot',
      tags: [],
    });
    expect(response.status).toBe(200);
  });
  it('Get starred repositories.', async () => {
    const response = await request(app)
      .post('/api/repositories/stars/tags')
      .send({
        github_username: 'barretot',
        tags: [],
      });

    expect(response.status).toBe(200);
  });
  it('Get starred repositories by tags.', async () => {
    const response = await request(app)
      .post('/api/repositories/stars/tags')
      .send({
        github_username: 'barretot',
        tags: ['Elixir', 'JavaScript'],
      });

    expect(response.status).toBe(200);
  });
  it('Repositories of all users.', async () => {
    const response = await request(app).get('/api/repositories');

    expect(response.status).toBe(200);
  });

  // Comente este bloco de código caso queira ver a coleção de testes no MongoDB
  it('Delete Repositories.', async () => {
    const response = await request(app).delete('/api/users/repositories/:id');

    expect(response.status).toBe(200);
  });
});
