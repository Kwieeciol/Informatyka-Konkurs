const prompt = require("prompt-sync")();

const grid = [
    ["#", "#", "#", "#", "#"],
    ["#", ".", ".", "#", "#"],
    ["#", ".", "#", ".", "#"],
    ["#", "#", "#", ".", "#"],
    ["#", "#", "#", "#", "#"]    
]

const free_spaces = [
    [2, 2], [2, 3], [3, 4], [4, 4], [2, 2]
]

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

function get_row(grid, n) {
    return grid[n - 1];
}

function get_col(grid, n) {
    let col = [];

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

    for (let i = x; i < row.length; i++) {
        let current = [y, i];
        let cell = row[i - 1];

        if (cell == "#") {
            break;
        }

        positions.push(current);
    }
    // Reversing
    for (let i = x; i > 0; i--) {
        let current = [y, i];
        let cell = row[i - 1];

        if (cell == "#") {
            break;
        }

        positions.push(current);
    }
    
    return delete_duplicates(positions);
}

function get_adjacent_y(grid, y, x) {
    let col = get_col(grid, x);
    let positions = [];

    for (let i = y; i < col.length; i++) {
        let current = [i, x];
        let cell = col[i - 1];

        if (cell == "#") {
            break;
        }

        positions.push(current);
    }
    // Reversing
    for (let i = y; i > 0; i--) {
        let current = [i, x];
        let cell = col[i - 1];

        if (cell == "#") {
            break;
        }

        positions.push(current);
    }
    
    return delete_duplicates(positions);
}

function get_adjacent_cells(grid, y, x) {
    let adjacent_x = get_adjacent_x(grid, y, x);
    let adjacent_y = get_adjacent_y(grid, y, x);
    adjacent_x.push(...adjacent_y);

    return delete_duplicates(adjacent_x);
}

function get_chamber(grid, y, x) {
//    const is_not_in_grid = (grid, y, x) => {
//        for ([_y, _x] of grid) {
//            if (_y === y && _x === x) {
//                return true;
//            }
//        }
//        return false;
//    }
//
//    let positions = get_adjacent_cells(grid, y, x);
//    positions.push([y, x]);
//
//    for (pos of positions) {
//        let surroundings = get_adjacent_cells(grid, ...pos);
//
//        for (s of surroundings) {
//            if (is_not_in_grid(grid, ...s)) {
//                positions.push(get_adjacent_cells(grid, ...s));
//            }
//        }
//    }
//    return delete_duplicates(positions);
}

console.log(get_chamber(grid, 3, 2));
