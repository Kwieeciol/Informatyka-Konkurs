x, y = [int(x) for x in input().split()]
grid = []

for i in range(y):
    row = list(input())
    grid.append(row)


def get_col(n):
    return [row[n] for row in grid]


before_height = 0
counter = 0

for i in range(x):
    col = get_col(i)
    height = col.count("#")

    if height > before_height:
        before_height = height
        counter += 1

print(counter)