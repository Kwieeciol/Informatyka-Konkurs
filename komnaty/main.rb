def get_row(grid, n)
    """Returns a row"""
    return grid[n - 1]
end

def get_col(grid, n)
    """Returns a column"""
    return grid.map { |row| row[n - 1] }
end

def get_cell(grid, y, x)
    """Returns the value of a cell"""
    return grid[y - 1][x - 1]
end

def get_adjacent_x(grid, y, x)
    row = get_row(grid, y)
    positions = []

    row[x - 1..].each_with_index do | cell, x_ |
        current = [y, x_ + x]
        break if cell == "#"

        positions << current
    end

    row[..x - 1].reverse.each_with_index do | cell, x_ |
        current = [y, x - x_]
        break if cell == "#"

        positions << current
    end
    return positions.uniq
end

def get_adjacent_y(grid, y, x)
    col = get_col(grid, x)
    positions = []

    col[y - 1..].each_with_index do | cell, y_ |
        current = [y_ + y, x]
        break if cell == "#"

        positions << current
    end

    col[..y - 1].reverse.each_with_index do | cell, y_ |
        current = [y - y_, x]
        break if cell == "#"

        positions << current
    end
    return positions.uniq
end

def get_adjacent_cells(grid, y, x)
    adjacent_x = get_adjacent_x(grid, y, x)
    adjacent_y = get_adjacent_y(grid, y, x)
    return (adjacent_x + adjacent_y).uniq
end

def get_surrounding_positions(grid, y, x)
    positions = [[y + 1, x], [y, x - 1], [y, x + 1], [y - 1, x]]
    correct = []

    positions.each do | y, x |
        if y > 0 and x > 0 && y <= grid.length and x <= grid.length
            correct << [y, x]
        end
    end
    return correct
end

def get_chamber(grid, y, x)
    positions = get_adjacent_cells(grid, y, x)

    positions.each do | y, x |
        surroundings = get_adjacent_cells(grid, y, x)

        surroundings.each do | s |
            if !positions.include? s
                positions << s
            end
        end
    end
    return positions
end

def get_chamber_count(grid, chamber)
    count = 0

    chamber.each do | y, x |
        surroundings = get_surrounding_positions(grid, y, x)

        surroundings.each do | cell |
            value = get_cell(grid, *cell)

            if value == "#"
                count += 1
            end
        end
    end
    return count
end

def main()
    grid, free_spaces = [], []
    print "> "
    n = gets.chomp().to_i

    n.times do | i |
        print "> "
        row = gets.chomp().split("")
        grid << row
    end

    n.times do | i |
        print "> "
        y, x = gets.chomp().split(" ")
        free_spaces << [y.to_i, x.to_i]
    end

    free_spaces.each do | y, x |
        chamber = get_chamber(grid, y, x)
        count = get_chamber_count(grid, chamber)
        puts count
    end
end

if __FILE__ == $0
    main()
end