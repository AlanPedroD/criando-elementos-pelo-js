// Criando o título do site
const titulo = document.createElement('h1'); // Criando o elemento <h1>
titulo.id = 'titulo'; // Definindo o id do título
titulo.textContent = 'Loja Virtual'; // Definindo o texto do título
document.body.appendChild(titulo); // Adicionando o título ao body

// Criando o elemento que representa o produto
const produto = document.createElement('div'); // Criando um contêiner para o produto

// Nome do produto
const nomeProduto = document.createElement('h2');
nomeProduto.textContent = 'Smartphone X';

// Descrição do produto
const descricaoProduto = document.createElement('p');
descricaoProduto.textContent = 'Um smartphone moderno com tecnologia avançada, ideal para todas as suas necessidades.';

// Preço do produto
const precoProduto = document.createElement('p');
precoProduto.textContent = 'Preço: R$ 2.500,00';

// Opcional: adicionar uma imagem do produto
const imagemProduto = document.createElement('img');
imagemProduto.src = 'imagens/imagem-smartphone.jpg'; // URL de uma imagem placeholder
imagemProduto.alt = 'Imagem do Smartphone X';
imagemProduto.style.width = '200px';  // Definindo a largura
imagemProduto.style.height = 'auto';

// Adicionando os elementos do produto ao contêiner do produto
produto.appendChild(nomeProduto);
produto.appendChild(descricaoProduto);
produto.appendChild(precoProduto);
produto.appendChild(imagemProduto);

// Adicionando o contêiner do produto ao body
document.body.appendChild(produto);
