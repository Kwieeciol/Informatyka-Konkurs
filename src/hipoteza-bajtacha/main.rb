def is_prime(n)
    (2...n).each do |x|
        if n % x == 0
            return false
        end
    end
    return true
end

def get_prime_numbers(n)
    output = []
    n.downto(2).each do |x|
        if is_prime(x)
            output << x
        end
    end
    return output
end

def get_two_sum(primes, number)
    primes.each_with_index do |q, i|
        next_values = primes[i + 1..]

        next_values.each do |p|
            if p <= q and p + q == number
                return p, q
            end
        end
    end
end

n = gets.chomp().to_i
numbers = []

n.times do
    num = gets.chomp().to_i
    primes = get_prime_numbers(num)
    nums = get_two_sum(primes, num)
    numbers << nums
end

numbers.each do |p, q|
    puts "#{p} #{q}"
end