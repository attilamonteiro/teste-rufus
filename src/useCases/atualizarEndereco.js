// Define a função atualizarEndereco que recebe um objeto contendo um novoEndereco e um enderecoRepository
const atualizarEndereco = async ({ novoEndereco, enderecoRepository }) => {
    try {
// Chama o método atualizar do enderecoRepository passando o id do novoEndereco e o objeto completo
        await enderecoRepository.atualizar(novoEndereco.id, novoEndereco);
    } catch (error) {
// Em caso de erro, lança uma nova exceção contendo a mensagem de erro original
        throw new Error(`Erro ao atualizar endereço: ${error.message}`);
    }
};
// Exporta a função atualizarEndereco para uso em outros arquivos
module.exports = atualizarEndereco;
