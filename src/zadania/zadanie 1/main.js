const prompt = require("prompt-sync")();

let n = Number(prompt("> "));
let parzyste = [];
let nieparzyste = [];

for (let i = 0; i < n; i++) {
    let num = Number(prompt("> "));
    if (num % 2 == 0) {
        parzyste.push(num);
    } else {
        nieparzyste.push(num);
    }
}

if (parzyste.length > nieparzyste.length) {
    console.log("P");
} else if (parzyste.length < nieparzyste.length) {
    console.log("NP");
} else {
    console.log("=");
}