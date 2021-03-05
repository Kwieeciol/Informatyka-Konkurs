print "> "
n = gets.chomp().to_i()
numery = []

n.times do |i|
    print "> "
    num = gets.chomp().to_i()
    numery << num
end


numery.each do |x|
    puts "X" * x
end