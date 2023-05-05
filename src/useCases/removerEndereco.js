// Função assíncrona que recebe como argumento um objeto com as propriedades "id" e "enderecoRepository"
const removerEndereco = async ({ id, enderecoRepository }) => {
    try {
// Chama o método "remover" do "enderecoRepository" passando o "id" como argumento
    await enderecoRepository.remover(id);
    } catch (error) {
// Em caso de erro, lança uma nova exceção com a mensagem "Erro ao remover endereço" concatenada com a mensagem de erro original
      throw new Error(`Erro ao remover endereço: ${error.message}`);
    }
  };
  
  module.exports = removerEndereco; // Exporta a função "removerEndereco" para uso em outros arquivos do projeto