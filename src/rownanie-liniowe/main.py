import re

eq_pattern = re.compile("\D+")
op_pattern = re.compile("[\*\+-/]")

operators = {
    '+': lambda x, y: x + y,
    '-': lambda x, y: x - y,
}

eq = input("Wpisz równanie liniowe: ")

if not 'x' in eq:
    exit("Nie wpisałeś wartości x")

elif not any(op in eq for op in operators.keys()):
    exit()

values = [int(x) for x in eq_pattern.split(eq)]
operator = op_pattern.findall(eq)[0]
func = operators[operator]

if len(values) != 3:
    exit("Niewłaściwy syntax równania.")

elif values[0] == 0:
    exit("x nie może być 0")

a, b, c = values
x = a / func(b, c)
print(f"x = {x}")

# Rozwiązanie zrobione zgodnie z pseudokodem
# a = int(input("> "))
# b = int(input("> "))
# c = int(input("> "))

# x = a / (b + c)
# print(x)