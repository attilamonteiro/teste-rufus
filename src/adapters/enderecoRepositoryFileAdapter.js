// Importa o módulo fs, responsável por interagir com arquivos no sistema operacional
const fs = require('fs');
// Importa a classe EnderecoRepository do domínio
const EnderecoRepository = require('../domain/enderecoRepository');

// Cria a classe EnderecoRepositoryFileAdapter que herda da EnderecoRepository
class EnderecoRepositoryFileAdapter extends EnderecoRepository {
// Construtor da classe
constructor({ filePath }) {
// Chama o construtor da classe pai
super();
// Atribui o caminho do arquivo a uma propriedade da classe
this.filePath = filePath;
}

// Método para adicionar um novo endereço
async adicionar(endereco) {
// Lê o conteúdo do arquivo e armazena os endereços existentes em uma variável
const enderecos = await this._lerArquivo();
// Define o ID do novo endereço com base no número de endereços já existentes
endereco.id = enderecos.length + 1;
// Adiciona o novo endereço ao array
enderecos.push(endereco);
// Escreve o novo array de endereços no arquivo
await this._escreverArquivo(enderecos);
}

// Método para remover um endereço pelo ID
async remover(id) {
// Lê o conteúdo do arquivo e armazena os endereços existentes em uma variável
let enderecos = await this._lerArquivo();
// Filtra o array de endereços, removendo o endereço com o ID informado
enderecos = enderecos.filter(endereco => endereco.id !== id);
// Escreve o novo array de endereços no arquivo
await this._escreverArquivo(enderecos);
}

// Método para atualizar um endereço pelo ID
async atualizar(id, novoEndereco) {
// Lê o conteúdo do arquivo e armazena os endereços existentes em uma variável
const enderecos = await this._lerArquivo();
// Busca o índice do endereço a ser atualizado pelo ID
const enderecoIndex = enderecos.findIndex(endereco => endereco.id === id);
// Se o índice não for encontrado, lança uma exceção
if (enderecoIndex === -1) {
throw new Error('Endereço não encontrado');
}
// Substitui o endereço antigo pelo novo endereço no array
enderecos[enderecoIndex] = novoEndereco;
// Escreve o novo array de endereços no arquivo
await this._escreverArquivo(enderecos);
}

// Método para listar todos os endereços cadastrados
async listar() {
// Lê o conteúdo do arquivo e armazena os endereços existentes em uma variável
const enderecos = await this._lerArquivo();
// Retorna o array de endereços
return enderecos;
}

// Método privado para ler o arquivo de endereços
async _lerArquivo() {
// Lê o conteúdo do arquivo e armazena em uma variável
const fileContent = await fs.promises.readFile(this.filePath, 'utf-8');
// Inicializa o array de endereços com um array vazio
let enderecos = [];

// Caso contrário, a variável enderecos permanece como um array vazio
if (fileContent) {
    enderecos = JSON.parse(fileContent);
    }
    return enderecos;
}

// Escreve o conteúdo do array enderecos no arquivo especificado na propriedade filePath
async _escreverArquivo(enderecos) {
    await fs.promises.writeFile(this.filePath, JSON.stringify(enderecos));
    }
}

// Exporta a classe EnderecoRepositoryFileAdapter para ser utilizada em outras partes do código
module.exports = EnderecoRepositoryFileAdapter;