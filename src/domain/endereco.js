// Define a classe Endereco com o construtor e as propriedades id, rua, cidade e estado
class Endereco {
    constructor({ id, rua, cidade, estado }) {
    this.id = id;
    this.rua = rua;
    this.cidade = cidade;
    this.estado = estado;
    }
    }
    
// Exporta a classe Endereco para que possa ser utilizada em outros arquivos do projeto
module.exports = Endereco;