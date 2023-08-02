const meuNome = "ricardo donizetti galvão frança";

const arrayMeuNome = meuNome.split(" ");
// const primeiroNome = arrayMeuNome[0].toLowerCase(0);
// const segundoNome = arrayMeuNome[1].toLowerCase(0);
// const terceiroNome = arrayMeuNome[2].toLowerCase(0);
// const quartoNome = arrayMeuNome[3].toLowerCase(0);
let nomeFormatado = "";
for (let item of arrayMeuNome) {
    let primeiraLetra = item.slice(0, 1);
    let restanteDoNome = item.slice(1);
    nomeFormatado += primeiraLetra.toUpperCase() + restanteDoNome + " ";
}

console.log(nomeFormatado.trim())
