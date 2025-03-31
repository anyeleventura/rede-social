const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const loginService = {
  async login(email, password) {
    const user = await User.findOne({ email });
    if (!user) throw new Error('Usuário não encontrado');

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) throw new Error('Senha incorreta');

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { token, user };
  }
};

module.exports = loginService;