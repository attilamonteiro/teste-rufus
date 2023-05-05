// Define uma função assíncrona que recebe um objeto com a propriedade enderecoRepository como argumento
const listarEnderecos = async ({ enderecoRepository }) => {
  try {
  // Chama o método listar do objeto enderecoRepository e atribui o resultado à constante enderecos
  const enderecos = await enderecoRepository.listar();
  // Retorna o valor da constante enderecos
  return enderecos;
  } catch (error) {
  // Se ocorrer algum erro na execução do método listar, lança uma exceção com uma mensagem personalizada que inclui o erro original
      throw new Error(`Erro ao listar endereços: ${error.message}`);
    }
  };
  
  // Exporta a função listarEnderecos como módulo

  module.exports = listarEnderecos;