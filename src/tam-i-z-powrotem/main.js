const prompt = require("prompt-sync")();

let [d, bi, g, n] = prompt().split(" ").map(Number);
let t = 0;
let b = bi;

// Warunki sprawdzania rejsu
if (b < g) {
    console.log("NIE");
    process.exit(0);
}

if (b < 2 * (d - g)) {
    console.log("NIE");
    process.exit(0);
}

if (b < 2 * g) {
    console.log("NIE");
    process.exit(0);
}

for (let k = 1; k < n + 1; k++) {
    if (k == 1) {
        if (b - g < 2 * (d - g)) {
            t += 1;
            b = bi;
        } else {
            b -= b;
        }
    } else if (k == n) {
        if (b - 2 * (d - g) < g) {
            t += 1;
            b = bi;
        } else {
            b -= 2 * (d - g);
        }
    } else if (k % 2 == 0) {
        if (b - 2 * g < 2 * g) {
            t += 1;
            b = bi;
        } else {
            b -= 2 * (d - g);
        }
    } else if (k % 2 != 0) {
        if (b - 2 * g < 2 * (d - g)) {
            t += 1;
            b = bi;
        } else {
            b -= 2 * g;
        }
    }
}

console.log(t);