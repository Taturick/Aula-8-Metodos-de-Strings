const email = "noturno2drick@gmailcom";

let arrobaIndex = email.indexOf("@");
let pontoIndex = email.indexOf(".", arrobaIndex);

if (arrobaIndex !== -1 && pontoIndex !== -1 && pontoIndex > arrobaIndex) {
  console.log("E-mail atende as requisições");
} else {
  console.log("Não há . após o @ ou o e-mail é inválido.");
}
