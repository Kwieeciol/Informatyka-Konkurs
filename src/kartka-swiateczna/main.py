a, b, c, d, e = [int(x) for x in input().split()]

for i in range(1, a + 1, 2):
    bok = (c - i) // 2
    print(bok)
    print("." * bok + "#" * i + "." * bok)


for i in range(b, c + 1, 2):
    bok = (c - i) // 2
    print("." * bok + "#" * i + "." * bok)

for i in range(e):
    bok = (c - d) // 2
    print("." * bok + "#" * d + "." * bok)