const Parse = require("parse/node");

const criarUsuario = async (nome, email, senha) => {
  const query = new Parse.Query("Usuario");
  query.equalTo("email", email);
  
  const existingEmail = await query.first();
  if (existingEmail) {
    throw new Error("Este Email já existe.");
  }

  const User = Parse.Object.extend("Usuario");
  const user = new User();
  user.set("nome", nome);
  user.set("email", email);
  user.set("senha", senha);
  
  await user.save();
  return user;
};

const listarUsuarios = async () => {
  const User = Parse.Object.extend("Usuario");
  const query = new Parse.Query(User);
  return query.find();
};

const listarUsuarioPorId = async (userId) => {
  const User = Parse.Object.extend("Usuario");
  const query = new Parse.Query(User);
  return query.get(userId);
};

const editarUsuario = async (userId, nome, email, senha) => {
  const User = Parse.Object.extend("Usuario");
  const query = new Parse.Query(User);
  const user = await query.get(userId);
  user.set("nome", nome);
  user.set("email", email);
  user.set("senha", senha);
  
  await user.save();
  return user;
};

const deletarUsuario = async (userId) => {
  const User = Parse.Object.extend("Usuario");
  const query = new Parse.Query(User);
  const user = await query.get(userId);
  await user.destroy();
};

module.exports = {
  criarUsuario,
  listarUsuarios,
  listarUsuarioPorId,
  editarUsuario,
  deletarUsuario,
};
