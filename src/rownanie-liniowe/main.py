import re

pattern = re.compile("\D+")
eq = input("Wpisz równanie liniowe: ")

if not 'x' in eq:
    exit("Nie wpisałeś wartości x")

values = [int(x) for x in pattern.split(eq)]

if len(values) != 3:
    exit("Niewłaściwy syntax równania.")

elif values[0] == 0:
    exit("x nie może być 0")

a, b, c = values
x = a / (b + c)
print(f"x = {x}")

# Rozwiązanie zrobione zgodnie z pseudokodem
# a = int(input("> "))
# b = int(input("> "))
# c = int(input("> "))

# x = a / (b + c)
# print(x)