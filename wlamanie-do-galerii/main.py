x = int(input("Wpisz ilość obrazów: "))
obrazy_w_muzeum = [int(x) for x in input("> ").split()]

wszystkie_obrazy = list(range(min(obrazy_w_muzeum), (max(obrazy_w_muzeum))))
skradzione_obrazy = list(set(wszystkie_obrazy) - set(obrazy_w_muzeum))

print(f"Skradziono: {len(skradzione_obrazy)} obrazy")