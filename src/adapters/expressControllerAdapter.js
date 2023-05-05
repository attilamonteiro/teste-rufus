// Importa o framework Express

const express = require('express');

// Importa o módulo body-parser, que é um middleware do Express para interpretar o corpo das requisições

const bodyParser = require('body-parser');

// Importa a classe Endereco, que representa o modelo de dados de endereço

const Endereco = require('../domain/endereco');

// Importa o caso de uso de adicionar endereço

const adicionarEndereco = require('../useCases/adicionarEndereco');

// Importa o caso de uso de remover endereço

const removerEndereco = require('../useCases/removerEndereco');

// Importa o caso de uso de atualizar endereço

const atualizarEndereco = require('../useCases/atualizarEndereco');

// Importa o caso de uso de listar endereços

const listarEnderecos = require('../useCases/listarEnderecos');

class ExpressControllerAdapter {

// Construtor da classe

  constructor({ app, enderecoRepository }) {
    this.app = app;
    this.enderecoRepository = enderecoRepository;

// Cria um novo roteador do Express

    this.router = express.Router();

// Configura as rotas da API

    this._configurarRotas();

// Usa o middleware bodyParser para interpretar o corpo das requisições como JSON

    this.app.use(bodyParser.json());

// Define a rota base da API como /api/enderecos e usa o roteador criado

    this.app.use('/api/enderecos', this.router);
  }

// Método privado que configura as rotas da API

  _configurarRotas() {

// Rota POST para adicionar um novo endereço

    this.router.post('/', async (req, res) => {
      try {

// Extrai os campos rua, cidade e estado do corpo da requisição

        const { rua, cidade, estado } = req.body;

// Cria um novo objeto de endereço com os campos extraídos

        const endereco = new Endereco({ rua, cidade, estado });

// Chama o caso de uso de adicionar endereço, passando o objeto criado e o repositório de endereços

        await adicionarEndereco({ endereco, enderecoRepository: this.enderecoRepository });

// Retorna um código 201 (Created) para indicar que o objeto foi criado com sucesso

        res.sendStatus(201);
      } catch (error) {

// Se houver um erro, retorna um código 500 (Internal Server Error) e uma mensagem de erro

        res.status(500).json({ message: error.message });
      }
    });

    // Rota DELETE para remover um endereço pelo ID


    this.router.delete('/:id', async (req, res) => {
      try {

        // Extrai o ID da requisição e converte para um número inteiro

        const id = parseInt(req.params.id);

        // Chama o caso de uso de remover endereço, passando o ID e o repositório de endereços

        await removerEndereco({ id, enderecoRepository: this.enderecoRepository });

        // Retorna um código 200 (OK) para indicar que o objeto foi removido com sucesso

        res.sendStatus(200);
      } catch (error) {

    // Se houver um erro, retorna um código 500 (Internal Server Error) e uma mensagem de erro

        res.status(500).json({ message: error.message });
      }
    });

// Rota PUT para atualizar um endereço pelo ID

    this.router.put('/:id', async (req, res) => {
        try {

          // Converte o ID para um número inteiro

          const id = parseInt(req.params.id);

          // Extrai as propriedades de rua, cidade e estado do corpo da requisição

          const { rua, cidade, estado } = req.body;
      
// Verifica se o objeto tem a propriedade id e lança um erro caso não tenha
          
          if (!id) {
            throw new Error('O objeto não tem a propriedade id');
          }
      
          // Cria um novo objeto Endereco com as informações atualizadas

          const novoEndereco = new Endereco({ id, rua, cidade, estado });

          // Chama a função atualizarEndereco com o novo objeto e o repositório de endereços

          await atualizarEndereco({ novoEndereco, enderecoRepository: this.enderecoRepository });

          // Retorna um status 200 em caso de sucesso ou um status 500 e uma mensagem de erro em caso de falha

          res.sendStatus(200);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      });
      
// Rota GET para listar todos os endereços

    this.router.get('/', async (req, res) => {
      try {

        // Chama a função listarEnderecos com o repositório de endereços

        const enderecos = await listarEnderecos({ enderecoRepository: this.enderecoRepository });

        // Retorna um objeto JSON com os endereços listados em caso de sucesso ou um status 500 e uma mensagem de erro em caso de falha

        res.json(enderecos);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });
  }
}
// Exporta o adaptador para o controlador Express.





module.exports = ExpressControllerAdapter;
