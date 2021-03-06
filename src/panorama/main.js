const prompt = require("prompt-sync")();

let [x, y] = prompt().split(" ").map(Number);
let grid = [];

for (let i = 0; i < y; i++) {
    let row = prompt().split("");
    grid.push(row);
}

function get_col(n) {
    let col = [];
    for (row of grid) {
        col.push(row[n]);
    }
    return col
}

let before_height = 0;
let counter = 0;

for (let i = 0; i < x; i++) {
    let col = get_col(i);
    let height = col.filter(x => x == "#").length;

    if (height > before_height) {
        before_height = height;
        counter += 1
    }
}

console.log(counter)