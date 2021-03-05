print "Wpisz równanie liniowe: "
eq = gets.chomp()

eq_pattern = /\D+/
op_pattern = /[\*\+-\/]/

operators = {
    "+" => Proc.new { |x, y| x + y },
    "-" => Proc.new { |x, y| x - y }
}

if !eq.match(/x/)
    abort("Nie wpisałeś wartości x")
elsif !operators.keys.any? { |k| eq.include?(k) }
    abort()
end

values = eq.split(eq_pattern).map(&:to_f)
operator = eq.match(op_pattern)[0]
func = operators[operator]

if values.length != 3
    abort("Niewłaściwy syntax równania")
elsif values[0] == 0
    abort("x nie może być 0")
end

a, b, c = values
x = (func.call(b, c)) / a
puts "x = #{x}"