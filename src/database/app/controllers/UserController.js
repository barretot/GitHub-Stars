import User from '../model/User';
import axios from 'axios';

export default {
  async index(req, res) {
    const user = await User.find();

    return res.json(user);
  },

  async store(request, response) {
    // Consumindo API do github
    const { github_username, tags } = request.body;

    const apiResponse = await axios.get(
      `https://api.github.com/users/${github_username}/repos`
    );

    const repos = apiResponse.data.map(({ name, description, language }) => ({
      name,
      description,
      language,
    }));

    const user = await User.create({
      github_username,
      tags,
      repos,
    });

    return response.json(user);
  },
};
