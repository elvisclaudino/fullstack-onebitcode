let opcao = 0;

do {
  opcao = prompt(
    "Escolha uma opção \n1- Opção 1 \n2- Opção 2 \n3- Opção 3 \n4- Opção 4 \n5- Encerrar"
  );

  switch (opcao) {
    case "1":
      alert("Você escolheu a 1° opção!");
      break;
    case "2":
      alert("Você escolheu a 2° opção!");
      break;
    case "3":
      alert("Você escolheu a 3° opção!");
      break;
    case "4":
      alert("Você escolheu a 4° opção!");
      break;
    case "5":
      alert("Você escolheu encerrar o programa!");
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida!");
  }
} while (opcao !== "5");
