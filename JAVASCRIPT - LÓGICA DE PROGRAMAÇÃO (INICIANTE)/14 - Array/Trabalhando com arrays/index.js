const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
console.log(arr);

// Adicionar elementos
// Push
let tamanho = arr.push("Boromir");
console.log(arr);
console.log(tamanho);
// Unshift
tamanho = arr.unshift("Teste");
console.log(arr);
console.log(tamanho);

// Remover elementos
// Pop
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);
// Shift
ultimoElemento = arr.shift();
console.log(arr);
console.log(ultimoElemento);

// Pesquisar por um elemento
// Includes
const inclui = arr.includes("Gandalf");
console.log(inclui);
// IndexOf
const indice = arr.indexOf("Gandalf");
console.log(indice);

// Cortar e Concatenar
// Slice
const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);
// Concat
const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

// Substituição de elementos
// Splice
const elementosRemovidos = sociedade.splice(indice, 1, "Gandolf, o Cinzento");
console.log(sociedade);
console.log(elementosRemovidos);

// Iterar sobre os Elementos
// For
for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice];
  console.log(elemento + " se encontra na posição " + indice);
}
