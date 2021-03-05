import math
import sys

try:
    N, T, A = [int(x) for x in sys.argv[1:]]
except Exception as exc:
    exit("Proszę wpisać odpowiednią ilość parametrów")

time = [x / 10 for x in range(0, A * 10, T)][:N]
amplitude = [math.sin(x) for x in time]


for amp in amplitude:
    v = round(A - (A * amp))
    print(" " * v + ".")