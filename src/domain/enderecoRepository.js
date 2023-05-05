// Define uma classe EnderecoRepository vazia
class EnderecoRepository {
// Define quatro métodos vazios que retornam Promises
    async adicionar(endereco) {}
    async remover(id) {}
    async atualizar(id, novoEndereco) {}
    async listar() {}
    }
    
// Exporta a classe EnderecoRepository para ser utilizada em outros arquivos.
module.exports = EnderecoRepository;