primeiroVeiculo = prompt("Qual o nome do primeiro veículo? ");
velocidadeDoPrimeiroVeiculo = parseFloat(
  prompt("Qual a velocidade do primeiro veículo? ")
);
segundoVeiculo = prompt("Qual o nome do segundo veículo? ");
velocidadeDoSegundoVeiculo = parseFloat(
  prompt("Qual a velocidade do segundo veículo? ")
);

if (velocidadeDoPrimeiroVeiculo > velocidadeDoSegundoVeiculo) {
  alert("O " + primeiroVeiculo + " é mais rápido!");
} else if (velocidadeDoPrimeiroVeiculo === velocidadeDoSegundoVeiculo) {
  alert("As velocidades são iguais");
} else {
  alert("O " + segundoVeiculo + " é mais rápido!");
}
