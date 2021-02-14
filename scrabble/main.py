n = int(input("> "))
odpowiedzi = [[] for x in range(n)]

def mozna_stworzyc(literki: list, slowo: str) -> bool:
    lst = []
    for l in slowo:
        if l.upper() in literki:
            literki.remove(l.upper())
            lst.append(True)
        else:
            lst.append(False)
    
    return all(lst)


for i in range(n):
    x, y = input("Wpisz x oraz y: ").split()
    zbior = input("Wpisz zbiór liter: ").split()

    for j in range(int(y)):
        slowo = input(f"Wpisz slowo nr. {j + 1}: ")
        mozna = mozna_stworzyc(zbior.copy(), slowo)

        if mozna:
            odpowiedzi[i].append("TAK")
        else:
            odpowiedzi[i].append("NIE")

    
for odp in odpowiedzi:
    for x in odp:
        print(x)
    print()