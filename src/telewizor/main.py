a, b, w, h = list(map(int, input("> ").split()))

possible = []
i = 1

def is_possible():
    try:
        x, y = possible[-1]
        return x + w <= a and y + h <= b
    except:
        return w <= a and h <= b


while is_possible():
    pos = (w * i, h * i)
    i += 1
    possible.append(pos)

print(len(possible))