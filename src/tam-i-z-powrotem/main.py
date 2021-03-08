d, b, g, n = 10, 20, 6, 4
gb = d - g

"""

d = dystans między Alokacją i Binarią (mile morskie)
b = pojemność na mile morskie
h = dystans między Gazoliną i Alokacją (mile morskie)
n = zaplanowana ilość kursów
bg = dystans między Binarią i Gazoliną (mile morskie)

"""

paliwo = b
total_runs = 0

for i in range(1, n + 1):
    print(paliwo)
    if i % 2 != 0:
        # Jedziemy z Alokacji do Binarii
        pass
    else:
        # Jedziemy z Binarii do Alokacji
        pass

    paliwo -= d

print('\n', total_runs)