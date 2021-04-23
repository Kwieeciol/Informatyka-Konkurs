N, k = [int(x) for x in input().split()]
m = [int(x) for x in input().split()]

segmenty = []

for i, elem in enumerate(m):
    data = m[i:i + k]
    if len(data) == k:
        segmenty.append(data)

niepoprawne_segmenty = [segm for segm in segmenty if sum(segm) % 2 != 0]
poprawne_segmenty = [segm for segm in segmenty if sum(segm) % 2 == 0]

out = 0

for segment in niepoprawne_segmenty:
    out += 1

print(out)