function dobro(x) {
  alert("O dobro de " + x + " é " + x * 2);
}

// dobro(5);
// dobro(7);

// dobro();

function dizerOla(nome = "mundo") {
  alert("Olá, " + nome + "!");
}

// dizerOla("Elvis");
// dizerOla();

function soma(a, b) {
  alert("Resultado da soma é " + (a + b));
}

// soma(7, 6);
// soma(1, 1);

function criarUsuario(nome, email, senha, tipo = "Admin") {
  const usuario = {
    nome, // mesmo que nome: nome
    email,
    senha,
    tipo,
  };

  console.log(usuario);
}

// criarUsuario("Elvis", "elviscladino6@gmail.com", "1234567", "Pessoa Fisica");
// criarUsuario("Elvis", "elviscladino6@gmail.com", "1234567");
// criarUsuario("elvisclaudino6@gmail.com", "Elvis", "1234567");

function novoUsuario(nome, tipo = "Admin", email, senha) {
  const usuario = {
    nome, // mesmo que nome: nome
    email,
    senha,
    tipo,
  };

  console.log(usuario);
}

// novoUsuario("Elvis", "elviscladino6@gmail.com", "1234567");
// novoUsuario("Elvis", "Admin", "elviscladino6@gmail.com", "1234567");

function muitosParametros(
  nome,
  telefone,
  endereco,
  aniversariom,
  email,
  senha
) {
  //...
}

muitosParametros(
  "Elvis",
  "77777777",
  "Rua Xv de Novembro",
  "06/10/2003",
  "elvisclaudno6@gmail.com",
  "1234567"
);

function objetoComoParametro(usuario) {
  //...
}

const dadosDoUsuario = {
  nome: "",
  telefone: "",
  email: "",
  senha: "",
  endereco: "",
  aniversario: "",
};

objetoComoParametro(dadosDoUsuario);
