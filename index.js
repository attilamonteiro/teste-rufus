// Importa o framework Express para criar uma aplicação web
const express = require('express');

// Importa o adaptador para o repositório de endereços baseado em arquivo
const EnderecoRepositoryFileAdapter = require('./src/adapters/enderecoRepositoryFileAdapter')

// Importa o adaptador para o controlador Express
const ExpressControllerAdapter = require('./src/adapters/expressControllerAdapter');

// Cria uma instância da aplicação web usando o Express
const app = express();

// Cria uma instância do adaptador do repositório de endereços
const enderecoRepository = new EnderecoRepositoryFileAdapter({
filePath: './enderecos.txt'
});

// Cria uma instância do adaptador do controlador Express, injetando a instância da aplicação e do repositório de endereços
const expressControllerAdapter = new ExpressControllerAdapter({
app,
enderecoRepository
});

// Define a porta onde a aplicação irá rodar
const PORT = process.env.PORT || 3002;

// Inicia a aplicação, fazendo ela ouvir a porta especificada
app.listen(PORT, () => {
console.log(`Servidor rodando na porta ${PORT}`);
});