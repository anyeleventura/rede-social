const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

// Criar um usuário (POST)
router.post("/", usuarioController.criarUsuario);

// Obter todos os usuários (GET)
router.get("/", usuarioController.listarUsuarios);

// Obter um usuário por ID (GET)
router.get("/:id", usuarioController.listarUsuarioPorId);

// Atualizar um usuário (PUT)
router.put("/:id", usuarioController.editarUsuario);

// Deletar um usuário (DELETE)
router.delete("/:id", usuarioController.deletarUsuario);

module.exports = router;
