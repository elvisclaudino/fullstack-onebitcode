const nomePersonagemUm = prompt("Qual o nome do primeiro personagem? ");
const poderDeAtaque = parseInt(
  prompt("Qual o poder de ataque do primeiro personagem? ")
);
const nomePersonagemDois = prompt("Qual o nome do segundo personagem? ");
const pontosDeVida = parseInt(
  prompt("Quantos pontos de vida tem o segundo personagem? ")
);
const poderDeDefesa = parseInt(
  prompt("Qual o poder de defesa do segundo personagem? ")
);
const escudo = prompt("O segundo personagem possui um escudo? (sim ou não)");

let dano = 0;

if (escudo === "não" && poderDeAtaque > poderDeDefesa) {
  dano += poderDeAtaque - poderDeDefesa;
} else if (escudo === "sim" && poderDeAtaque > poderDeDefesa) {
  dano += (poderDeAtaque - poderDeDefesa) / 2;
} else {
  dano = 0;
}

vidaPersonagemDois = pontosDeVida - dano;

alert(
  nomePersonagemUm +
    "\nPoder de ataque: " +
    poderDeAtaque +
    "\n" +
    nomePersonagemDois +
    "\nPontos de vida: " +
    pontosDeVida +
    "\nPoder de defesa: " +
    poderDeDefesa +
    "\nPossui escudo? " +
    escudo +
    "\nO dano causado pelo " +
    nomePersonagemUm +
    " foi de " +
    dano +
    "\n" +
    nomePersonagemDois +
    " Ficou com " +
    vidaPersonagemDois +
    " pontos de vida."
);
