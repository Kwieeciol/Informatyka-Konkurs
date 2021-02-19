print "> "
n = gets.chomp().to_i
suma = 0

while n > 0
    suma += n % 10
    n = (n / 10).floor
end

puts suma