const imoveis = [];
let opcao = 0;
imoveisCadastrados = 0;

do {
  opcao = prompt(
    "Bem-vindos ao Cadastro de Imóveis! \nTotal de imóveis: " +
      imoveis.length +
      "\n\nEscolha uma opção: \n1. Novo Imóvel \n2. Listar Imóveis \n3. Sair"
  );

  switch (opcao) {
    case "1":
      const imovel = {};

      imovel.proprietario = prompt("Informe o nome do propietario do Imóvel:");
      imovel.quartos = prompt("Quantos quartos possuem o imóvel?");
      imovel.banheiros = prompt("Quantos banheiros possuem o Imóvel?");
      imovel.garagem = prompt("O Imóvel possui garagem? (Sim/Não)");

      const confirmacao = confirm(
        "Salvar esse imóvel?\n" +
          "\nProprietário: " +
          imovel.proprietario +
          "\nNúmero de quartos: " +
          imovel.quartos +
          "\nNúmero de banheiros: " +
          imovel.banheiros +
          "\nPossui garagem? " +
          imoveis.garagem
      );

      if (confirmacao) {
        imoveis.push(imovel);
        alert("Imóvel salvo com sucesso");
      } else {
        alert("Voltando a menu...");
      }
      break;

    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\nProprietário : " +
            imoveis[i].proprietario +
            "\nNúmero de quartos : " +
            imoveis[i].quartos +
            "\nNúmero de banheiros : " +
            imoveis[i].banheiros +
            "\nPossui garagem? : " +
            imoveis[i].garagem
        );
      }
      break;

    case "3":
      alert("Encerrando...");
      break;

    default:
      alert("Comando inválido!");
  }
} while (opcao !== 3);
