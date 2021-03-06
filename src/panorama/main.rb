x, y = gets.chomp().split().map(&:to_i)
$grid = []

y.times do |i|
    row = gets.chomp().split('')
    $grid << row
end

def get_col(n)
    return $grid.map { |row| row[n]}
end

before_height = 0
counter = 0

x.times do |i|
    col = get_col(i)
    height = col.count("#")

    if height > before_height
        before_height = height
        counter += 1
    end
end

puts counter