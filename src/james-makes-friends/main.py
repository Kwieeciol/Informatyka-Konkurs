n = int(input())
slats = [int(x) for x in input().split()]
copy = slats.copy()

output = []

while len(copy) > 1:
    m = max(copy)

    if slats.count(m) % 2 == 0:
        output.append(m ** 2)
        copy = [elem for elem in copy if elem != m]
    else:
        try:
            values = [m, *[elem for elem in slats if abs(m - elem) == 1]][:2]
        except:
            pass
        else:
            copy = [elem for elem in copy if elem not in values]

        m2 = max(copy)

        try:
            values2 = [m2, *[elem for elem in slats if abs(m2 - elem) == 1]][:2]
        except:
            pass
        else:
            copy = [elem for elem in copy if elem not in values2]

        if len(values) == 2 and len(values2) == 2:
            output.append(min(values) * min(values2))

        # if len(values) >= 2:
        #     copy.remove(m)
        #     m2 = max(copy)
        #     print(m, m2)
        #     values2 = [elem for elem in copy if m2 - elem == 1]
            # print(values2)

        # copy.remove(m2)
    #     values2 = []
    #     print(m, values1)
        # if len(values) >= 2:
        #     pass

print(sum(output))