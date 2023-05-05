//Código Base


// const fs = require('fs');

// module.exports = (app) => {
//   app.post('/endereco', (req, res) => {
//     const novoEndereco = req.body;

//     if (!fs.existsSync('enderecos.txt')) {
//       fs.writeFileSync('enderecos.txt', '');
//     }

//     let enderecos = '';
//     if (fs.existsSync('enderecos.txt') && fs.statSync('enderecos.txt').size > 0) {
//       enderecos = fs.readFileSync('enderecos.txt', 'utf-8');
//     }

//     let listaDeEnderecos = [];
//     try {
//       listaDeEnderecos = JSON.parse(enderecos);
//     } catch (erro) {
//       console.error('Erro ao ler o arquivo de endereços:', erro.message);
//     }

//     listaDeEnderecos.push(novoEndereco);

//     fs.writeFileSync('enderecos.txt', JSON.stringify(listaDeEnderecos));

//     res.send('Endereço salvo com sucesso!');
//   });

//   app.delete('/endereco/:id', (req, res) => {
//     let enderecos = '';
//     if (fs.existsSync('enderecos.txt') && fs.statSync('enderecos.txt').size > 0) {
//       enderecos = fs.readFileSync('enderecos.txt', 'utf-8');
//     }

//     let listaDeEnderecos = [];
//     try {
//       listaDeEnderecos = JSON.parse(enderecos);
//     } catch (erro) {
//       console.error('Erro ao ler o arquivo de endereços:', erro.message);
//     }

//     const id = parseInt(req.params.id);
//     const index = listaDeEnderecos.findIndex(endereco => endereco.id === id);

//     if (index >= 0) {
//       listaDeEnderecos.splice(index, 1);
//       fs.writeFileSync('enderecos.txt', JSON.stringify(listaDeEnderecos));
//       res.status(200).send('Endereço removido com sucesso!');
//     } else {
//       res.status(404).send('Endereço não encontrado!');
//     }
//   });

//   app.put('/endereco/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const novoEndereco = req.body;

//     const enderecos = fs.readFileSync('enderecos.txt', 'utf-8');
//     let listaDeEnderecos = JSON.parse(enderecos);

//     const endereco = listaDeEnderecos.find(endereco => endereco.id === id);

//     if (endereco) {
//       endereco.rua = novoEndereco.rua || endereco.rua;
//       endereco.cidade = novoEndereco.cidade || endereco.cidade;
//       endereco.estado = novoEndereco.estado || endereco.estado;

//       fs.writeFileSync('enderecos.txt', JSON.stringify(listaDeEnderecos));

//       res.status(200).send('Endereço atualizado com sucesso!');
//     } else {
//       res.status(404).send('Endereço não encontrado!');
//     }
//   });

//   app.get('/endereco', (req, res) => {
//     const enderecos = fs.readFileSync('enderecos.txt', 'utf-8');

//     let listaDeEnderecos = [];
//     try {
//       listaDeEnderecos = JSON.parse(enderecos);
//     } catch (erro) {
//       console.error('Erro ao ler o arquivo de endereços:', erro.message);
//     }

//     res.status(200).send(listaDeEnderecos);
//   });

// };
