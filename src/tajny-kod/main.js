const prompt = require("prompt-sync")();

let cyfra = prompt("Wpisz tajną cyfre: ");
let n = Number(prompt("> "));

for (let i = 0; i < n; i++) {
    let [x, y] = prompt("> ").split(" ");

    cyfra = cyfra.replaceAll(x, y);
}

console.log(cyfra);