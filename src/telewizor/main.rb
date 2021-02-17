print "> "
$a, $b, $w, $h = gets.chomp().split(" ").map(&:to_i)

$possible = [];
i = 1

def is_possible()
    x, y = $possible[-1]
    if !x.nil? and !y.nil?
        statement = x + $w <= $a && y + $h <= $b
        # return statement
    else
        statement = $w <= $a && $h <= $b
        # return statement
    end
end

while is_possible()
    pos = [$w * i, $h * i]
    i += 1
    $possible << pos
end

p $possible.length