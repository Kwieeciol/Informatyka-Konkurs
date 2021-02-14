const prompt = require("prompt-sync")();

function get_row(grid, n) {
    return grid[n - 1];
}

function get_col(grid, n) {
    col = [];
    for (row of grid) {
        col.push(row[n - 1]);
    }
    return col;
}

function get_cell(grid, y, x) {
    return grid[y - 1][x - 1];
}

function get_adjacent_x(grid, y, x) {
    let row = get_row(grid, y);
    let positions = [];

    for ([_x, cell] of row.slice(x - 1).entries()) {
        let current = [y, _x + x];
        if (cell == "#") {
            break;
        }
        positions.push(current);
    }

    for ([_x, cell] of row.slice(0, x).reverse().entries()) {
        let current = [y, x - _x];
        if (cell == "#") {
            break;
        }
        positions.push(current);
    }

    return positions
}

function get_adjacent_y(grid, y, x) {
    let col = get_col(grid, x);
    let positions = [];

    for ([_y, cell] of col.slice(y - 1).entries()) {
        let current = [_y + y, x];
        if (cell == "#") {
            break;
        }
        positions.push(current);
    }
    
    for ([_y, cell] of col.slice(0, y).reverse().entries()) {
        let current = [y - _y, x];
        if (cell == "#") {
            break;
        }
        positions.push(current);
    }

    return positions
}

function delete_duplicates(arr) {
    let uniques = [];
    let items_found = {};

    for (value of arr) {
        let stringified = JSON.stringify(value);
        if (items_found[value]) {
            continue;
        }

        uniques.push(value);
        items_found[value] = true;
    }
    return uniques;
}

function get_adjacent_cells(grid, y, x) {
    let adjacent_x = get_adjacent_x(grid, y, x);
    let adjacent_y = get_adjacent_y(grid, y, x);
    return delete_duplicates(adjacent_x.concat(adjacent_y));
}

const grid = [
    ["#", "#", "#", "#", "#"],
    ["#", ".", ".", "#", "#"],
    ["#", ".", "#", ".", "#"],
    ["#", "#", "#", ".", "#"],
    ["#", "#", "#", "#", "#"]
]

console.log(get_adjacent_cells(grid, 3, 2));