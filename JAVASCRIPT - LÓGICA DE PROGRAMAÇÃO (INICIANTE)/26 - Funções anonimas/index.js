function somar(a, b) {
  return a + b;
}

let operação = somar;

// console.log(operação(2, 2));

operação = function (a, b) {
  return a - b;
};

// console.log(operação(2, 2));

olaMundo();
// oiMundo(); Funções anônimas só existem se colocadas depois da sua criação

function olaMundo() {
  console.log("Olá, mundo!");
}

const oiMundo = function () {
  console.log("Oi, mundo!");
};

oiMundo();
