class Account {
  #password;
  #balance = 0;
  constructor(user) {
    this.email = user.email;
    this.#password = user.password;
  }

  getBalance(email, password) {
    // if (this.email === email && this.#password === password)
    if (this.#authenticate(email, password)) {
      return this.#balance;
    } else {
      return null;
    }
  }

  #authenticate(email, password) {
    return this.email === email && this.#password === password;
  }
}

const user = {
  email: "elvisclaudino6@gmail.com",
  password: "123456",
};

const myAccount = new Account(user);

console.log(myAccount);
console.log(myAccount.getBalance("elvisclaudino6@gmail.com", "123456"));
