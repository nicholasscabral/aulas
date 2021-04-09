const express = require("express"); // importando o framework "express" e atribuindo a uma variavel

const app = express(); // iniciando a aplicação "app" chamando a função express

app.get("/", (req, res) => {
  // rota do tipo get "/" retornando uma mensagem ao ser acessada no navegador
  return res.send("esse eh a minha primeira rota com metodo get"); // respondendo a requisição com uma mensagem
});

app.get("/user/:id", (req, res) => {
  // rota do tipo "get" simulando a deleção de um usuario pelo id
  const id = req.params.id;
  return res.send("vou deletar do banco de dados o user com id: " + id);
});

app.listen(1220, () => {
  // fazendo a aplicação "ouvir" a porta local 1220 e printando uma mensagem
  console.log("servidor iniciado...");
});
