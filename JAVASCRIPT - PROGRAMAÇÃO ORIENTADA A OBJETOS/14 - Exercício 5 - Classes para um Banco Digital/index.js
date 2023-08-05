const App = require("./App");

App.createUser("elvisclaudino6@gmail.com", "Elvis Claudino");
App.createUser("paolaalvesc@gmail.com", "Paola Alves");
App.createUser("everlialvesc@gmail.com", "Everli Alves");

App.deposit("elvisclaudino6@gmail.com", 100);

App.transfer("elvisclaudino6@gmail.com", "paolaalvesc@gmail.com", 20);

App.changeLoanFee(10);
App.takeLoan("everlialvesc@gmail.com", 2000, 24);

console.log(App.findUser("elvisclaudino6@gmail.com"));
console.log(App.findUser("elvisclaudino6@gmail.com").account);
console.log(App.findUser("paolaalvesc@gmail.com"));
console.log(App.findUser("paolaalvesc@gmail.com").account);
console.log(App.findUser("everlialvesc@gmail.com"));
console.log(App.findUser("everlialvesc@gmail.com").account);
console.log(
  App.findUser("everlialvesc@gmail.com").account.loans[0].installments
);
