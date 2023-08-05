function calcularAreaTriangulo() {
  const base = prompt("Informe a base do triângulo:");
  const altura = prompt("Informe a altura do triângulo:");
  return (base * altura) / 2;
}

function calcularAreaRetangulo() {
  const base = prompt("Informe a base do retângulo:");
  const altura = prompt("Informe a altura do retângulo:");
  return base * altura;
}

function calcularAreaQuadrado() {
  const lado = prompt("Informe o lado do quadrado:");
  return lado * lado;
}

function calcularAreaTrapezio() {
  const baseMaior = parseFloat(prompt("Informe a base maior do trapezio:"));
  const baseMenor = parseFloat(prompt("Informe a base Menor do trapezio:"));
  const altura = prompt("Informe a altura do trapezio");
  return ((baseMaior + baseMenor) * altura) / 2;
}

function calcularAreaCirculo() {
  const raio = prompt("Informe o raio do circulo:");
  return 3.14 * (raio * raio);
}

function exibirMenu() {
  return prompt(
    "Calculadora Geométrica \n\n1. Calcular área de triângulo \n2. Calcular área de retângulo \n3. Calcular área de quadrado \n4. Calcular área de trapézio \n5. Calcular área de círculo \n6. Sair"
  );
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = calcularAreaTriangulo();
        break;
      case "2":
        resultado = calcularAreaRetangulo();
        break;
      case "3":
        resultado = calcularAreaQuadrado();
        break;
      case "4":
        resultado = calcularAreaTrapezio();
        break;
      case "5":
        resultado = calcularAreaCirculo();
        break;
      case "6":
        alert("Encerrando o programa...");
        break;
      default:
        alert("Opção inválida!");
    }

    if (resultado) {
      alert("Resultado: " + resultado);
    }
  } while (opcao != 6);
}

executar();
