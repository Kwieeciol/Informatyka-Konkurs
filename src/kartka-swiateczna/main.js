const prompt = require("prompt-sync")();

let [a, b, c, d, e] = prompt().split(" ").map(Number);

for (let i = 1; i < a + 1; i += 2) {
    let bok = Math.floor((c - i) / 2);
    console.log(".".repeat(bok) + "#".repeat(i) + ".".repeat(bok));
}

for (let i = 1; i < c + 1; i += 2) {
    let bok = Math.floor((c - i) / 2);
    console.log(".".repeat(bok) + "#".repeat(i) + ".".repeat(bok));
}

for (let i = 0; i < e; i++) {
    let bok = Math.floor((c - d) / 2);
    console.log(".".repeat(bok) + "#".repeat(d) + ".".repeat(bok));
}