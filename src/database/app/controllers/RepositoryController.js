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

      const repos = apiResponse.data.map(
        ({
          node_id,
          name,
          description,
          html_url,
          language,
          stargazers_count,
          watchers_count,
        }) => ({
          node_id,
          name,
          description,
          html_url,
          language,
          stargazers_count,
          watchers_count,
        })
      );

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

    const arrRepos = repos.map(
      ({
        node_id,
        name,
        description,
        html_url,
        language,
        stargazers_count,
        watchers_count,
      }) => ({
        node_id,
        name,
        description,
        html_url,
        language,
        stargazers_count,
        watchers_count,
      })
    );

    const tagsFilter = await tags.map((elements) => {
      return arrRepos.filter(
        ({ name, description, language }) =>
          name === elements || description === elements || language === elements
      );
    });

    // Verifica se o usuario existe
    if (!(await userExists)) {
      return response
        .status(400)
        .json({ error: 'User not found, register it' });
    }

    // Verifica se o usuario existe e se foi aplicado alguma tag
    if (!((await userExists) && tags.length)) {
      return response.status(400).json({
        message: 'User found not filter tags',
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

  async getRepoStars(request, response) {
    const schema = Yup.object().shape({
      github_username: Yup.string().required().min(1),
      tags: Yup.array(),
    });

    if (!(await schema.isValid(request.body))) {
      // Verifica se passou pelo schema
      return response.status(400).json({
        error: 'Invalid field',
      });
    }
    const userExists = await Repository.findOne({
      github_username: request.body.github_username,
    });

    const { tags } = request.body;

    const [{ repos }] = await Repository.find(userExists);

    const arrRepos = await repos.map(
      ({
        node_id,
        name,
        description,
        html_url,
        language,
        stargazers_count,
        watchers_count,
      }) => ({
        node_id,
        name,
        description,
        html_url,
        language,
        stargazers_count,
        watchers_count,
      })
    );

    const starFilter = arrRepos.filter(
      ({ stargazers_count, watchers_count }) =>
        stargazers_count > 0 || watchers_count > 0
    );

    const tagsFilterStar = await tags.map((elements) => {
      return starFilter.filter(
        ({ name, description, language }) =>
          name === elements || description === elements || language === elements
      );
    });

    // Verifica se o usuario existe
    if (!(await userExists)) {
      return response
        .status(400)
        .json({ error: 'User not found, register it' });
    }

    if (!((await userExists) && tagsFilterStar.length && tags.length)) {
      return response.status(200).json({
        starFilter,
      });
    } else {
      return response.status(200).json({
        message: 'Stars!!',
        tagsFilterStar,
      });
    }

    /* return response.status(200).json({
      starFilter,
    }); */
  },

  async destroy(request, response) {
    await Repository.findByIdAndRemove(request.params.id);
    return response.status(200).json({ Message: 'Successfully deleted' });
  },
};
