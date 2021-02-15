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

function get_surrounding_positions(grid, y, x) {
    let positions = [[y + 1, x], [y, x + 1], [y, x -1], [y + 1, x]];
    let correct = [];

    for ([y, x] of positions) {
        if (y > 0 && x > 0 && y <= grid.length && x <= grid.length) {
            correct.push([y, x]);
        }
    }
    return correct
}

function include(grid, pos) {
    let [y, x] = pos;
    for ([_y, _x] of grid) {
        if (y == _y && x == _x) {
            return true;
        }
    }
    return false;
}

function get_chamber(grid, y, x) {
    let positions = get_adjacent_cells(grid, y, x);

    for ([y, x] of positions) {
        let surroundings = get_adjacent_cells(grid, y, x);
        for (s of surroundings) {
            if (!include(positions, s)) {
                positions.push(s);
            }
        }
    }
    return delete_duplicates(positions);
}

function get_chamber_count(grid, chamber) {
    let count = 0;

    for ([y, x] of chamber) {
        let surroundings = get_surrounding_positions(grid, y, x);
        for ([_y, _x] of surroundings) {
            let value = get_cell(grid, _y, _x)
            if (value == "#") {
                count += 1
            }
        }
    }
    return count
}

function main() {
    let grid = [];
    let free_spaces = [];

    let n = Number(prompt("> "));

    for (let i = 0; i < n; i++) {
        let row = prompt("> ").split("");
        grid.push(row);
    }

    for (let i = 0; i < n; i++) {
        let [y, x] = prompt("> ").split(" ");
        free_spaces.push([Number(y), Number(x)]);
    }

    for ([y, x] of free_spaces) {
        let chamber = get_chamber(grid, y, x);
        let count = get_chamber_count(grid, chamber);
        console.log(count);
    }
}

main();