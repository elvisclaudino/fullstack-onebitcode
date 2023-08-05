class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }

  login(email, password) {
    if (email === this.email && password === this.password) {
      this.login = "Login bem sucedido!";
    } else {
      this.login = "Senha/Email não conferem!";
    }
  }
}

const elvis = new User("Elvis", "elvisclaudino6@gmail.com", "12345");
console.log(elvis);
elvis.login("elvisclaudino6@gmail.com", "123456");
console.log(elvis);
