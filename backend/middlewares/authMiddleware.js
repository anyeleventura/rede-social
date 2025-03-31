// Aqui você pode adicionar qualquer middleware de autenticação que quiser, por exemplo, para verificar se o usuário está logado.

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Modelo de usuário

const authMiddleware = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Verificar se o usuário existe
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Usuário não encontrado.' });
    }

    // Verificar se o usuário já está logado
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.id === user.id) {
          return res.status(400).json({ message: 'Usuário já está logado.' });
        }
      } catch (error) {
        // Se o token for inválido, ele não está logado
      }
    }

    // Verificar se a senha está correta
    const isPasswordValid = await bcrypt.compare(password, user.senha);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Senha incorreta.' });
    }

    // Tudo certo, passar para o próximo middleware
    req.user = user;
    next();

  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor.' });
  }
};

module.exports = authMiddleware;
