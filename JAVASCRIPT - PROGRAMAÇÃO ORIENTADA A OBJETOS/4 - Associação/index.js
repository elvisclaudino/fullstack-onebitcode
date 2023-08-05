// const Address = require("./Address");
const Person = require("./Person");

// const addr = new Address("7 de Setembro", 99, "Centro", "São Fidélis", "RJ");
// const elvis = new Person("Elvis Claudino", addr);

const elvis = new Person(
  "Elvis Claudino",
  "7 de Setembro",
  99,
  "Centro",
  "São Fidélis",
  "RJ"
);

console.log(elvis);
console.log(elvis.address.fullAddress());
