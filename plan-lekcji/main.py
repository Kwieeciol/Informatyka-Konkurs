n = int(input("Ile godzin spędza na uczelni? "))

godziny = [int(x) for x in input("> ").replace("0 0", "1").split()]

print(godziny.count(1))