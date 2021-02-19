print "Wpisz równanie liniowe: "
eq = gets.chomp()

pattern = /\D+/

if !eq.match(/x/)
    abort("Nie wpisałeś wartości x")
end

values = eq.split(pattern).map(&:to_f)

if values.length != 3
    abort("Niewłaściwy syntax równania")
elsif values[0] == 0
    abort("x nie może być 0")
end

a, b, c = values
x = a / (b + c)
puts "x = #{x}"