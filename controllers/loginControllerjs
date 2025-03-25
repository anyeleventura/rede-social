const loginService = require('../services/loginService');

const loginController = {
  async login(req, res) {
    const { email, password } = req.body;

    try {
      const { token, user } = await loginService.login(email, password);
      res.status(200).json({ token, user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

module.exports = loginController;