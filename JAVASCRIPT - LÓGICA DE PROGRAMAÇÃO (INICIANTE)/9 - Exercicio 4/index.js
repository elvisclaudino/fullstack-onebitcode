const nome = prompt("Qual o nome do turista? ");
let contCidade = 0;
let cidades = "";

let visitou = prompt("Você já visitou alguma cidade? (s/n)");

while (visitou === "s") {
  let cidade = prompt("Qual cidade você já visitou? ");
  cidades += "- " + cidade + "\n";
  contCidade++;
  visitou = prompt("Você visitou alguma outra cidade? (s/n)");
}

alert(
  "Turista: " +
    nome +
    "\nQuantidade de cidades visitadas: " +
    contCidade +
    "\nCidades visitadas:\n" +
    cidades
);
