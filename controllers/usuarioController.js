const usuarioService = require("../services/usuarioService");

const criarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const user = await usuarioService.criarUsuario(nome, email, senha);
    res.status(201).json({ message: "Usuário criado com sucesso!", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const listarUsuarios = async (req, res) => {
  try {
    const users = await usuarioService.listarUsuarios();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const listarUsuarioPorId = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await usuarioService.listarUsuarioPorId(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const editarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;
  const userId = req.params.id;

  try {
    const updatedUser = await usuarioService.editarUsuario(userId, nome, email, senha);
    res.status(200).json({ message: "Usuário alterado com sucesso!", user: updatedUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletarUsuario = async (req, res) => {
  const userId = req.params.id;

  try {
    await usuarioService.deletarUsuario(userId);
    res.status(200).json({ message: "Usuário deletado com sucesso!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  criarUsuario,
  listarUsuarios,
  listarUsuarioPorId,
  editarUsuario,
  deletarUsuario,
};
