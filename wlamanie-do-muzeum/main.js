const prompt = require("prompt-sync")();

let x = Number(prompt("Wpisz ilość obrazów: "));
let obrazy_w_muzeum = prompt("> ").split(" ").map(x => parseInt(x));

let wszystkie_obrazy = [];

for (let i = Math.min(...obrazy_w_muzeum); i < Math.max(...obrazy_w_muzeum) + 1; i++) {
    wszystkie_obrazy.push(i);
}

let skradzione_obrazy = wszystkie_obrazy.filter(obraz => !obrazy_w_muzeum.includes(obraz));
console.log(`Skradziono: ${skradzione_obrazy.length} obrazy`);