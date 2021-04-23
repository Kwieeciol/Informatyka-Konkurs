n, p = [int(x) for x in input().split()]
jedna_dawka = [int(x) for x in input().split()]
magazyn_dawki = [int(x) for x in input().split()]

mozliwe_dawki = [(x // y) for x, y in zip(magazyn_dawki, jedna_dawka)]

def can_be_done(n: int, dawki: list) -> bool:
    try:
        dawki.remove(n)
    except:
        needed = sum(magazyn_dawki) - n
    else:
        needed = sum(dawka for dawka in dawki if dawka <= n)

    return p >= needed

for n in sorted(mozliwe_dawki, reverse=True):
    if can_be_done(n, mozliwe_dawki.copy()):
        print(n)
        break
else:
    for n in range(max(mozliwe_dawki), 0, -1):
        if can_be_done(n, mozliwe_dawki.copy()):
            print(n)
            break
