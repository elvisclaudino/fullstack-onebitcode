let resultado = "";

let numero = parseInt(
  prompt("Você quer a taboada de qual número? (de 1 a 20)")
);

for (let i = 1; i <= 20; i++) {
  resultado += numero + "x" + i + " = " + numero * i + "\n";
}

alert(resultado);
