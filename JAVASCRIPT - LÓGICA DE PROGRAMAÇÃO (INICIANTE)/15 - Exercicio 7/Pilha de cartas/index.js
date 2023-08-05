let baralho = [];
let opcao = 0;

do {
  opcao = prompt(
    "Número de cartas no baralho:\n" +
      baralho.length +
      "\nEscolha uma opção \n1 - Adicionar uma carta \n2 - Puxar uma carta \n3 - Sair"
  );

  switch (opcao) {
    case "1":
      let nomeCarta = prompt("Qual o nome da carta?");
      baralho.push(nomeCarta);
      break;
    case "2":
      if (baralho.length === 0) {
        alert("O baralho está vazio!");
        break;
      } else {
        let cartaRetirada = baralho.pop();
        alert("Você retirou a carta: " + cartaRetirada);
        break;
      }

    case "3":
      alert("Encerrando programa...");
      break;
    default:
      alert("Opção inválida!");
  }
} while (opcao !== "3");
