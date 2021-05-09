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
      tags: Yup.array(),
    });

    if (!(await schema.isValid(request.body))) {
      // Verifica se passou pelo schema
      return response.status(400).json({ error: 'Field invalid' });
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

    const tagsFilter = await tags.map((elements) => {
      return repos.filter(
        ({ name, description, language }) =>
          name === elements || description === elements || language === elements
      );
    });

    console.log(tagsFilter.indexOf('Elixir'));

    const repository = await Repository.create({
      github_username,
      tags,
      repos,
    });

    if (!(await tags.length)) {
      return response.status(200).json({
        Message: 'Successfully created',
        repository,
      });
    } else {
      return response.status(200).json({
        Message: 'Successfully created',
        github_username,
        tags,
        tagsFilter,
      });
    }
  },

  async destroy(request, response) {
    await Repository.findByIdAndRemove(request.params.id);
    return response.status(200).json({ Message: 'Successfully deleted' });
  },
};
