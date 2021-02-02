const prompt = require("prompt-sync")();

const a = Number(prompt("Wpisz wartość liczby a: "));
const b = Number(prompt("Wpisz wartość liczby b: "));

function nwd (k, n) {
    while (k != n) {
        if (k > n) {
            k -= n
        } else {
            n -= k
        }
    }
    return k
}

function nww (k, n) {
    let result = nwd(k, n);
    return (k * n) / result
}

console.log(`NWD: ${nwd(a, b)}`);
console.log(`NWW: ${nww(a, b)}`);
