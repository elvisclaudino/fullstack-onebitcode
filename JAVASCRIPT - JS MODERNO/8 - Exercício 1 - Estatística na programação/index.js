// const aritimetica = (...numbers) => {
//   const sum = numbers.reduce((accum, num) => accum + num, 0);
//   const media = sum / numbers.length;
//   return media;
// };

// console.log(aritimetica(1, 2, 3, 4));

const numbers = {
  number: [7, 9, 3],
  peso: [2, 5, 1],
};

const ponderada = (numbers) => {
  const number = numbers.number;
  const peso = numbers.peso;
  const sumNumber = (...number) => {
    return number.reduce((accum, num) => accum + num, 0);
  };

  const sumPeso = (...peso) => peso.reduce((accum, num) => accum + num, 0);
};

console.log(ponderada(numbers));
