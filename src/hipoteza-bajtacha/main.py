def is_prime(n):
    for x in range(2, n):
        if n % x == 0:
            return False
    return True


def get_prime_numbers(n):
    for x in range(n, 1, -1):
        if is_prime(x):
            yield x


def get_two_sum(primes, number):
    for i, q in enumerate(primes):
        next_values = primes[i + 1:]

        for p in next_values:
            if p <= q and p + q == number:
                return p, q


n = int(input("> "))
numbers = []

for _ in range(n):
    num = int(input("> "))
    primes = list(get_prime_numbers(num))
    nums = get_two_sum(primes, num)
    numbers.append(nums)


for (p, q) in numbers:
    print(p, q)