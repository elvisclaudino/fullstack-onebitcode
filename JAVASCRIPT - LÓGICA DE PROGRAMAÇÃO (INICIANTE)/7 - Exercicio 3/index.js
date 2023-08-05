const valorEmMetros = parseFloat(prompt("Insira a medida em metros: "));
const opcaoMedida = prompt(
  "Para qual medida deseja converter esse valor? \nmm \ncm \ndm \ndam \nhm \nkm"
);

switch (opcaoMedida) {
  case "mm":
    const valorEmMm = valorEmMetros * 1000;
    alert("O valor convertido em MM ficou de " + valorEmMm + " mm");
    break;
  case "cm":
    const valorEmCm = valorEmMetros * 100;
    alert("O valor convertido em CM ficou de " + valorEmCm + " cm");
    break;
  case "dm":
    const valorEmDm = valorEmMetros * 10;
    alert("O valor convertido em DM ficou de " + valorEmDm + " dm");
    break;
  case "dam":
    const valorEmDam = valorEmMetros * 0.1;
    alert("O valor convertido em DAM ficou de " + valorEmDam + " dam");
    break;
  case "hm":
    const valorEmHm = valorEmMetros * 0.01;
    alert("O valor convertido em HM ficou de " + valorEmHm + " hm");
    break;
  case "km":
    const valorEmKm = valorEmMetros * 0.001;
    alert("O valor convertido em KM ficou de " + valorEmKm + " km");
    break;
  default:
    alert("Opção inválida");
}
