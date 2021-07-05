n = 4
nazwiska = [
    "Kowalski Nowak".split(), 
    "Kowalski Lis".split(), 
    "Nowak Lis".split(),
    "Lis Kozak".split()
]
# TEST
unique_names = list(set([imie for imiona in nazwiska for imie in imiona]))
mapping = {name: [] for name in unique_names} 

for (taller, shorter) in nazwiska:
    mapping[taller].append(shorter)

def who_is_taller(name1, name2) -> bool:
    if not mapping[name1]:
        return name2
    elif not mapping[name2]:
        return name1

    if name2 in mapping[name1]:
        return name1
    return name2


out = []

for name in unique_names:
    is_tallest = all([who_is_taller(name, x) == name for x in unique_names if x != name])
