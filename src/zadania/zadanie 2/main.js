const prompt = require("prompt-sync")();

let n = Number(prompt("> "))
let numery = [];

for (let i = 0; i < n; i++) {
    let num = Number(prompt("> "));
    numery.push(num);
}

for (x of numery) {
    console.log("X".repeat(x));
}