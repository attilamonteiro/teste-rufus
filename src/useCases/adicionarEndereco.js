// Função assíncrona que recebe como argumentos um objeto "endereco" e um "enderecoRepository"
const adicionarEndereco = async ({ endereco, enderecoRepository }) => {
    try {
// Chama o método "adicionar" do "enderecoRepository", passando o objeto "endereco" como argumento
      await enderecoRepository.adicionar(endereco);
    } catch (error) {
// Caso ocorra um erro, lança uma exceção com uma mensagem de erro personalizada
      throw new Error(`Erro ao adicionar endereço: ${error.message}`);
    }
  };
  
// Exporta a função "adicionarEndereco" para que possa ser utilizada em outros módulos
  module.exports = adicionarEndereco;
