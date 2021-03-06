const prompt = require("prompt-sync")();

function is_prime(n) {
    for (let x = 2; x < n; x++) {
        if (n % x == 0) {
            return false;
        }
    }
    return true;
}

function get_prime_numbers(n) {
    let output = [];
    for (let x = n; x > 1; x--) {
        if (is_prime(x)) {
            output.push(x);
        }
    }
    return output;
}

function get_two_sum(primes, number) {
    for ([i, q] of primes.entries()) {
        let next_values = primes.slice(i + 1);

        for (p of next_values) {
            if (p <= q && p + q == number) {
                return [p, q]
            }
        }   
    }
}

let n = Number(prompt("> "));
let numbers = [];

for (let _ = 0; _ < n; _++) {
    let num = Number(prompt("> "));
    let primes = get_prime_numbers(num);
    let nums = get_two_sum(primes, num);
    numbers.push(nums);
}

for ([p, q] of numbers) {
    console.log(p, q);
}