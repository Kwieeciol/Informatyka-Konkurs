n = int(input("> "))

parzyste, nieparzyste = [], []

for i in range(n):
    num = int(input("> "))
    if num % 2 == 0:
        parzyste.append(num)
    else:
        nieparzyste.append(num)


query = "P" if len(parzyste) > len(nieparzyste) else "NP" if len(parzyste) < len(nieparzyste) else "="
print(query)