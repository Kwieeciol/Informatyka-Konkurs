x = int(input("Wpisz ilość obrazów: "))
obrazy_w_muzeum = []

for i in range(x):
    obrazy_w_muzeum.append(int(input("Wpisz number obrazu: ")))

wszystkie_obrazy = list(range(min(obrazy_w_muzeum), (max(obrazy_w_muzeum))))
skradzione_obrazy = list(set(wszystkie_obrazy) - set(obrazy_w_muzeum))
print(f"Skradziono: {len(skradzione_obrazy)} obrazy")