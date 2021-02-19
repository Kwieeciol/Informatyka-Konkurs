const prompt = require("prompt-sync")();

let pattern = /\D+/
let eq = prompt("Wpisz równanie liniowe: ")

if (!eq.includes("x")) {
    console.log("Nie wpisałeś wartości x");
    process.exit();
}

let values = eq.split(pattern).map(x => parseInt(x));

if (values.length != 3) {
    console.log("Niewłaściwy syntax równania");
    process.exit();    
} else if (values[0] == 0) {
    console.log("x nie może być 0")
    process.exit();
}

let [a, b, c] = values;
let x = a / (b + c)
console.log(`x = ${x}`);