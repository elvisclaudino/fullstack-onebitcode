let paciente = [];
opcao = 0;

do {
  fila = "";
  for (let i = 0; i < paciente.length; i++) {
    fila += i + 1 + "° - " + paciente[i] + "\n";
  }
  opcao = prompt(
    fila +
      "\nEscolha uma opção: \n 1: Adicionar um novo paciente \n 2: Consultar um paciente \n 3: Sair"
  );

  switch (opcao) {
    case "1":
      nomePaciente = prompt("Qual o nome do paciente a ser adicionado?");
      paciente.push(nomePaciente);
      break;
    case "2":
      if (paciente.length === 0) {
        alert("Não tem ninguém na fila!");
        break;
      } else {
        pacienteConsultado = paciente.shift();
        alert("O paciente " + pacienteConsultado + " acabou de ser consultado");
        break;
      }

    case "3":
      alert("Você escolheu sair!");
      break;
    default:
      alert("Opção inválida");
  }
} while (opcao !== "3");
