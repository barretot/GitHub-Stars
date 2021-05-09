import Repository from '../model/Repository';
import axios from 'axios';
import * as Yup from 'yup';

export default {
  async index(request, response) {
    const repositoryIndex = await Repository.find();

    return response.status(200).json({ repositoryIndex });
  },

  async store(request, response) {
    const { github_username } = request.body;
    const schema = Yup.object().shape({
      github_username: Yup.string().required().min(1),
    });

    if (!(await schema.isValid(request.body))) {
      // Verifica se passou pelo schema
      return response.status(400).json({
        error: 'Invalid fields, tags can be an empty array',
      });
    }

    const userExists = await Repository.findOne({
      github_username: github_username,
    });
    if (userExists) {
      return response.status(400).json({
        error: 'User already exists you can create tags for this user',
      });
    } else if (!userExists) {
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
        repos,
      });

      return response.status(200).json({
        Message: 'Successfully created',
        repository,
      });
    }
  },

  async storeTags(request, response) {
    const schema = Yup.object().shape({
      github_username: Yup.string().required().min(1),
      tags: Yup.array(),
    });

    if (!(await schema.isValid(request.body))) {
      // Verifica se passou pelo schema
      return response.status(400).json({
        error: 'Invalid fields, tags can be an empty array',
      });
    }
    const userExists = await Repository.findOne({
      github_username: request.body.github_username,
    });

    const { tags, github_username } = request.body;

    const [{ repos }] = await Repository.find(userExists);

    const arrRepos = repos.map(({ name, description, language }) => ({
      name,
      description,
      language,
    }));

    const tagsFilter = await tags.map((elements) => {
      return arrRepos.filter(
        ({ name, description, language }) =>
          name === elements || description === elements || language === elements
      );
    });

    if (!(await userExists)) {
      return response
        .status(400)
        .json({ error: 'User not found, register it' });
    }

    if (!((await userExists) && tags.length)) {
      return response.status(200).json({
        message: 'User found not filter',
        arrRepos,
      });
    } else {
      return response.status(200).json({
        message: 'User found and filter Applied',
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
