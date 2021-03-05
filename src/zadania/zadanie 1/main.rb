print "> "
n = gets.chomp().to_i()

parzyste, nieparzyste = [], []

n.times do |i|
    print "> "
    num = gets.chomp().to_i()

    if num % 2 == 0
        parzyste << num
    else 
        nieparzyste << num
    end
end

if parzyste.length > nieparzyste.length
    puts "P"
elsif parzyste.length < nieparzyste.length
    puts "NP"
else
    puts "="
end