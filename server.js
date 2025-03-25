const express = require("express");
const Parse = require("parse/node");
const usuarioRoutes = require("./routes/usuarioRoutes");

Parse.initialize("E90TJ2xJs054kCxsRFWWzMIrpzQXblubCTD8TFXU", "XH802ZnxOpyDSFkpe6dizkOvp22AMYpluLdJAMV5");
Parse.serverURL = "https://parseapi.back4app.com";

const app = express();
app.use(express.json());

// Usando as rotas
app.use("/usuario", usuarioRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
