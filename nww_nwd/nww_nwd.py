a = int(input("Wpisz wartość liczby a: "))
b = int(input("Wpisz wartość liczby b: "))

def nwd(k, n):
    while k != n:
        if k > n:
            k -= n
        
        else:
            n -= k
    
    return k


def nww(k, n):
    result = nwd(k, n)
    return (k * n) // result


print(f"NWD: {nwd(a, b)}")
print(f"NWW: {nww(a, b)}")