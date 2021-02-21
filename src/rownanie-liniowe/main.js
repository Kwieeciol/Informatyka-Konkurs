const prompt = require("prompt-sync")();

let eq_pattern = /\D+/
let op_pattern = /[\*\+-\/]/
let eq = prompt("Wpisz równanie liniowe: ");

let operators = {
    '+': (x, y) => (x + y),
    '-': (x, y) => (x - y)
}

if (!eq.includes("x")) {
    console.log("Nie wpisałeś wartości x");
    process.exit();
}

let values = eq.split(eq_pattern).map(x => parseInt(x));
let operator = eq.match(op_pattern)[0];
let func = operators[operator]

if (values.length != 3) {
    console.log("Niewłaściwy syntax równania");
    process.exit();    
} else if (values[0] == 0) {
    console.log("x nie może być 0")
    process.exit();
}

let [a, b, c] = values;
let x = a / func(b, c)
console.log(`x = ${x}`);