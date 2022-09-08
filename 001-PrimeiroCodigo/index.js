console.log("Olá Again!");

// Var deixa declarar várias vezes
// let da erro caso declarar mais de 1x mesmo nome de variável
// let pertence somente ao escopo e filhos
let nome = "Edimar";

if (!nome) {
  nome = "Edimar Alterado";
  console.log(nome);
}

nome = "Mateus";
console.log(nome);

// ---

const NOME = 'Daros';
console.log(NOME);