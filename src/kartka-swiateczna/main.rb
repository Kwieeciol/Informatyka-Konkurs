a, b, c, d, e = gets.chomp().split(" ").map(&:to_i)

(1..a).step(2).each do |i|
    bok = ((c - i) / 2).floor()
    puts "." * bok + "#" * i + "." * bok
end

(1..c).step(2).each do |i|
    bok = ((c - i) / 2).floor()
    puts "." * bok + "#" * i + "." * bok
end

e.times do |i|
    bok = ((c - d) / 2).floor()
    puts "." * bok + "#" * d + "." * bok
end