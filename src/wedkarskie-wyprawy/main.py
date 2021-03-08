d, w = [int(x) for x in input("> ").split()]
plan = [int(x) for x in input("> ").split()]
przygotowanie = [int(x) for x in input("> ").split()]

def is_last_one(dzien, index):
    indexes = [i for i, d in enumerate(plan) if d == dzien]
    return index == indexes[-1]


def can_be_done(dzien: int, index: int) -> bool:
    dni_na_przygotowanie = przygotowanie[dzien - 1]
    wolne_dni = [i for i, d in enumerate(plan, start=1) if d == 0 or not is_last_one(dzien, index)][index - dni_na_przygotowanie:index]
    return bool(wolne_dni)


if sum(przygotowanie) > plan.count(0):
    exit("NIE")

wszystkie_dni = 0

for i, dzien in enumerate(plan):
    if dzien == 0:
        continue

    if can_be_done(dzien, i):
        dni_na_przygotowanie = przygotowanie[dzien - 1]
        wszystkie_dni += dni_na_przygotowanie + 1


print(wszystkie_dni)