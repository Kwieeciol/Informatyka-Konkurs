const prompt = require("prompt-sync")();

let [a, b, w, h] = prompt("> ").split(" ").map(x => parseInt(x));
let possible = [];
let i = 1

function is_possible() {
    try {
        let [x, y] = possible[possible.length - 1];
        return x + w <= a && y + h <= b;
    } catch (error) {
        return w <= a && h <= b;
    }
}

while (is_possible()) {
    let pos = [w * i, h * i];
    i += 1;
    possible.push(pos);
}

console.log(possible.length)