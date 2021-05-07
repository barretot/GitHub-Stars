import Repository from '../model/Repository';
import axios from 'axios';
import * as Yup from 'yup';

export default {
  async index(request, response) {
    const repository = await Repository.find();

    return response.json(repository);
  },

  async store(request, response) {
    const schema = Yup.object().shape({
      github_username: Yup.string().required().min(1),
    });

    if (!(await schema.isValid(request.body))) {
      // Verifica se passou pelo schema
      return response.status(400).json({ error: 'Enter a user name valid' });
    }

    const { github_username, tags } = request.body;

    // Consumindo API do github
    const apiResponse = await axios.get(
      `https://api.github.com/users/${github_username}/repos`
    );

    const repos = apiResponse.data.map(({ name, description, language }) => ({
      name,
      description,
      language,
    }));

    const repository = await Repository.create({
      github_username,
      tags,
      repos,
    });

    return response.status(200).json({
      Message: 'Successfully created',

      repository,
    });
  },

  async destroy(request, response) {
    await Repository.findByIdAndRemove(request.params.id);
    return response.status(200).json({ Message: 'Successfully deleted' });
  },
};
