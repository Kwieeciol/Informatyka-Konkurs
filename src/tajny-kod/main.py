cyfra = input("Wpisz tajna cyfre: ")

n = int(input("> "))

for i in range(n):
    x, y = input("> ").split()

    cyfra = cyfra.replace(x, y)

print(cyfra)