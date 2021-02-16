print "Wpisz wartość liczby a: "
a = gets.chomp().to_f
print "Wpisz wartośc liczby b: "
b = gets.chomp().to_f

def nwd(k, n)
    while k != n
        if k > n
            k -= n
        else
            n -= k
        end
    end
    return k
end

def nww(k, n)
    result = nwd(k, n)
    return (k * n) / result
end

puts "NWD: #{ nwd(a, b) }"
puts "NWW: #{ nww(a, b) }"