let primeiroValor = parseFloat(prompt("Insira seu primeiro valor:"));
let segundoValor = parseFloat(prompt("Insira seu segundo valor:"));

const soma = primeiroValor + segundoValor;
const subtracao = primeiroValor - segundoValor;
const multiplicacao = primeiroValor * segundoValor;
const divisao = primeiroValor / segundoValor;

alert(
  "Soma: " +
    soma +
    "\nSubtração: " +
    subtracao +
    "\nMultiplicação: " +
    multiplicacao +
    "\nDivisão: " +
    divisao
);

console.log(
  "soma:",
  soma,
  "subtração:",
  subtracao,
  "multiplicação:",
  multiplicacao,
  "divisão:",
  divisao
);
