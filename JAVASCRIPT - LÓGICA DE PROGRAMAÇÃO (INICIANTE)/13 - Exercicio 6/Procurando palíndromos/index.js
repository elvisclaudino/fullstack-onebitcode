const palavra = prompt("Escreva uma palavra e veja se ela é uma palíndromo: ");

let palavraAoContrario = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraAoContrario += palavra[i];
}

if (palavraAoContrario === palavra) {
  alert(palavra + " é um palíndromo!");
} else {
  alert(
    palavra +
      " não é um palíndromo, ao contrário se escreve " +
      palavraAoContrario
  );
}
