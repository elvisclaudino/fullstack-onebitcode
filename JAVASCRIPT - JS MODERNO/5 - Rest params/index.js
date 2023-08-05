function sum(...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0);
}

console.log(sum(1, 1));
console.log(sum(2, 2, 2, 2, 2, 2));
console.log(sum(32, 5, 74, 7, 1, 9, 90));

function sum2(initial, ...numbers) {
  return numbers.reduce((accum, num) => accum + num, initial);
}

console.log(sum2(1, 1, 1));
console.log(sum2(1, 2, 2, 2, 2, 2, 2));
console.log(sum2(1, 32, 5, 74, 7, 1, 9, 90));
