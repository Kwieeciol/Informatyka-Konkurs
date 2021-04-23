m, n = [int(x) for x in input().split()]
grid = [list(input()) for x in range(m)]
p = int(input())
pytania = [tuple(int(x) for x in input().split()) for i in range(p)]

def get_next_pos(w, k):
    tile = grid[w - 1][k - 1]

    if tile == "N":
        # Pójść w górę
        next_w, next_k = (w - 1, k)
    elif tile == "S":
        # Pójść w dół
        next_w, next_k = (w + 1, k)
    elif tile == "W":
        # Pójść w lewo
        next_w, next_k = (w, k - 1)
    else:
        # Pójść w prawo
        next_w, next_k = (w, k + 1)

    if next_w <= 0 or next_k <= 0:
        return (w, k)
    return (next_w, next_k)


for pyt in pytania:
    w, k, n = pyt
    for _ in range(n):
        w, k = get_next_pos(w, k)

    print(w, k)