d = 10  # Dystans pomiędzy A i B
bi = 9 # KM na pełnym baku
g = 6   # Dystans między A i G
n = 4   # Liczba kursów
t = 0   # Liczba tankowań
b = bi  # Stan baku (zmienna)

if b < g:
    exit("NIE")

if b < 2 * (d - g):
    exit("NIE")

if b < 2 * g:
    exit("NIE")

for k in range(1, n + 1):
    if k == 1:
        if b - g < 2 * (d - g):
            t += 1
            b = bi
        else:
            b -= g

    elif k == n:
        if b - 2 * (d - g) < g:
            t += 1
            b = bi
        else:
            b -= 2 * (d - g)
        
    elif k % 2 == 0:
        if b - 2 * g < 2 * g:
            t += 1
            b = bi
        else:
            b -= 2 * (d - g)

    elif k % 2 != 0:
        if b - 2 * g < 2 * (d - g):
            t += 1
            b = bi
        else:
            b -= 2 * g

print(t)