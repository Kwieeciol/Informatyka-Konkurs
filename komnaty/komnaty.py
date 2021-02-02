def get_row(grid, n: int) -> list:
    """Returns a row"""
    return grid[n - 1]


def get_col(grid, n: int) -> list:
    """Returns a column"""
    return [row[n - 1] for row in grid]


def get_cell(grid, y: int, x: int) -> str:
    """Returns the value of a cell"""
    return grid[y - 1][x - 1]


def get_adjacent_x(grid, y: int, x: int) -> list:
    row = get_row(grid, y)
    positions = []

    for _x, cell in enumerate(row[x - 1:], start=x):
        current = (y, _x)
        if cell == "#":
            break

        positions.append(current)

    for _x, cell in zip(range(x, 0, -1), reversed(row[:x])):
        current = (y, _x)
        if cell == "#":
            break
            
        positions.append(current)
    return list(set(positions))


def get_adjacent_y(grid, y: int, x: int) -> list:
    col = get_col(grid, x)
    positions = []

    for _y, cell in enumerate(col[y - 1:], start=y):
        current = (_y, x)
        if cell == "#":
            break

        positions.append(current)

    for _y, cell in zip(range(y, 0, -1), reversed(col[:y])):
        current = (_y, x)
        if cell == "#":
            break
        
        positions.append(current)
    return list(set(positions))


def get_adjancent_cells(grid, y: int, x: int) -> list:
    # Getting the adjacent cells in the x axis
    adjacent_x = get_adjacent_x(grid, y, x)
    # Getting the adjacent cells in the y axis
    adjacent_y = get_adjacent_y(grid, y, x)
    return list(set([*adjacent_x, *adjacent_y]))


def get_surrounding_positions(grid, y: int, x: int) -> list:
    # Getting the positions
    positions = [(y + 1, x), (y, x - 1), (y, x + 1), (y - 1, x)]
    # Returning only valid positions
    return [(y, x) for (y, x) in positions if (y > 0 and x > 0) and (y <= len(grid) and x <= len(grid))]


def get_chamber(grid, y: int, x: int) -> list:
    # Getting the initial positions
    positions = list(set([(y, x), *get_adjancent_cells(grid, y, x)]))

    for pos in positions:
        surroundings = get_adjancent_cells(grid, *pos)

        for s in surroundings:
            if s not in positions:
                positions.append(s)

    return list(set(positions))


def get_chamber_count(grid, chamber: list) -> int:
    count = 0

    for room in chamber:
        surroundings = get_surrounding_positions(grid, *room)

        for cell in surroundings:
            value = get_cell(grid, *cell)

            if value == "#":
                count += 1
    
    return count


def main():
    grid, free_spaces = [], []
    n = int(input("> "))

    for i in range(n):
        row = list(input())
        grid.append(row)

    for i in range(n):
        y, x = input("> ").split()
        free_spaces.append((int(y), int(x)))

    for space in free_spaces:
        chamber = get_chamber(grid, *space)
        count = get_chamber_count(grid, chamber)
        print(count)


if __name__ == "__main__":
    main()