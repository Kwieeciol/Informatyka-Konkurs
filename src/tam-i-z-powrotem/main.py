d, bi, g, n = [int(x) for x in input("> ").split()]
t = 0
b = bi

# Warunki możliwości przeprowadzenia rejsu
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