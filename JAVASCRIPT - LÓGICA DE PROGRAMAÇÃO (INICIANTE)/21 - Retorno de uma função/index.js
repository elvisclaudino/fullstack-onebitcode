function calcularMedia(a, b) {
  let media = (a + b) / 2;
  return media;
}

// const resultado = calcularMedia(7, 2);
// console.log(resultado);

function criarProduto(nome, preco) {
  const produto = {
    nome, // nome: nome
    preco, // preco: preco
    estoque: 1,
  };
  return produto;
}

// const notebook = criarProduto("Notebook Intel core i3 8GB", 2500);
// console.log(notebook);

// console.log(criarProduto("Notebook Intel core i3 8GB", 2500));

function areaRetangular(base, altura) {
  return base * altura;
}

// console.log(areaRetangular(3, 5));

function areaQuadrada(lado) {
  return areaRetangular(lado, lado);
}

// console.log(areaQuadrada(9));

function ola() {
  let texto = "...";
  return texto;
  texto = "Olá, mundo!";
  console.log(texto);
}

// console.log(ola());

function maioridade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}

// console.log(maioridade(28));
// console.log(maioridade(12));
