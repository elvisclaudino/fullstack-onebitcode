class Wallet {
  #amount;
  #username;

  constructor() {
    this.#amount = 100.99 * 100; // 10099
    console.log(this.#amount);
  }

  // O Get não precisa ser referenciado com parenteses, diferente de uma função
  get amount() {
    return this.#amount / 100;
  }

  // getAmount() {
  //     return this.#amount / 100
  // }

  // Funciona para alterar um atributo privado
  set username(newUsername) {
    if (typeof newUsername === "string") {
      this.#username = newUsername;
    } else {
      console.log("username must be of type string");
    }
  }

  get username() {
    return this.#username;
  }
}

const myWallet = new Wallet();
console.log(myWallet.amount);
// console.log(myWallet.getAmount())

myWallet.username = "Elvis";
console.log(myWallet.username);

myWallet.username += " Claudino";
console.log(myWallet.username);

myWallet.username = true;
console.log(myWallet.username);
