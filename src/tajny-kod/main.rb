print "Wpisz tajną cyfre: "
cyfra = gets.chomp()
print "> "
n = gets.chomp().to_i

n.times do |i|
    print "> "
    x, y = gets.chomp().split(" ")

    cyfra = cyfra.gsub(x, y)
end

puts cyfra