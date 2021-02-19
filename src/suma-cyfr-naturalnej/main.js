const prompt = require("prompt-sync")();

let n = Number(prompt("> "));
let suma = 0;

while (n > 0) {
    suma += n % 10;
    n = Math.floor(n / 10);
}

console.log(suma);