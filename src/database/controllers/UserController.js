import User from '../models/User';

export default {
  async index(request, response) {
    const userIndex = await User.find();

    return response.json(userIndex);
  },

  async store(request, response) {
    const userStore = await User.create(request.body);

    return response.json(userStore);
  },
};
