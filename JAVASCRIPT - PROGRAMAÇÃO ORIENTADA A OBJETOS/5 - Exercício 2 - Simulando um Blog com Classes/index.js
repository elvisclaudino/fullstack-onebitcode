const Author = require("./Author");

const elvis = new Author("Elvis Claudino");

const post = elvis.whitePost("Título do post", "Lorem ipsum dolor sic...");

post.addComment("Isaac Pontes", "Muito bom!");
post.addComment("Lucas Braga", "Interessante!");

console.log(elvis);
console.log(post);
