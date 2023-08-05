let valorInicial = parseFloat(
  prompt("Qual a quantidade inicial de dinheiro disponível? ")
);

let opcao = 0;

do {
  opcao = parseInt(
    prompt(
      "Você tem " +
        valorInicial +
        "R$ \nVocê deseja: \n1- Adicionar dinheiro \n2- Retirar dinheiro \n3- Sair"
    )
  );

  switch (opcao) {
    case 1:
      valorInicial += parseFloat(
        prompt("Quanto dinheiro você quer adicionar? ")
      );
      alert("Você ficou com " + valorInicial + "R$ em sua conta");
      break;
    case 2:
      valorInicial -= parseFloat(prompt("Quanto dinheiro você quer retirar? "));
      alert("Você ficou com " + valorInicial + "R$ em sua conta");
      break;
    case 3:
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida");
  }
} while (opcao !== 3);

alert("O seu valor final ficou de " + valorInicial + "R$");
