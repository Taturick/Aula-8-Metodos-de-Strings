function imprimirData(dia, mes, ano){
    const diaFormatado = String(dia).padStart(2, "0");// Converter para String
    const mesFormatado = `${mes}`.padStart(2, "0")//String template
console.log(`${diaFormatado}/${mesFormatado}/${ano}`);
}

imprimirData(1, 1 , 2023)