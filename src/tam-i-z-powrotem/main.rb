d, bi, g, n = gets.chomp().split(" ").map(&:to_i)
t = 0
b = bi

# Warunki możliwości przeprowadzenia rejsu
if b < g
    abort("NIE")
end

if b < 2 * (d - g)
    abort("NIE")
end

if b < 2 * g
    abort("NIE")
end

(1..n).each do |k|
    if k == 1
        if b - g < 2 * (d - g)
            t += 1
            b = bi
        else
            b -= g
        end
    elsif k == n
        if b - 2 * (d - g) < g
            t += 1
            b = bi
        else 
            b = 2 * (d - g)
        end
    elsif k % 2 == 0
        if b - 2 * g < 2 * g
            t += 1
            b = bi
        else
            b -= 2 * g
        end
    elsif k % 2 != 0
        if b - 2 * g < 2 * (d - g)
            t += 1
            b = bi
        else
            b -= 2 * g
        end
    end
end

puts t