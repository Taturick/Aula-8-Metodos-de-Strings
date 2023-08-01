function replaceAll(original, text, newText){
    while (original !== original.replace(text, newText)){
    original = original.replace(text, newText)
} return original;
}
let brasilnumber = '1,350,000,00';

// brasilnumber = brasilnumber.replace(",", ".");
// brasilnumber = brasilnumber.replace(",", ".");

// console.log(brasilnumber)

// while (brasilnumber !== brasilnumber.replace(",", ".")){
//     brasilnumber = brasilnumber.replace(",", ".")
// }

// console.log(brasilnumber)
console.log(replaceAll(brasilnumber,",", "."))