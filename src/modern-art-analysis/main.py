colors = {
    "C": ["C", "B", "G", "C"],
    "M": ["B", "M", "R", "M"],
    "Y": ["G", "R", "Y", "Y"],
    "W": ["C", "M", "Y", "W"]
}

results = {
    "CC": "C",
    "CM": "B",
    "CY": "G",
    "CW": "C",

    "MC": "B",
    "MM": "M",
    "MY": "R",
    "MW": "M",

    "YC": "G",
    "YM": "R",
    "YY": "Y",
    "YW": "W",

    "WC": "C",
    "WM": "M",
    "WY": "Y",
    "WW": "W"
}

n = 3
grid = [
    list("MMM"),
    list("RYR"),
    list("BCB")
]

output = {x: {"color": "", "result": None} for x in range(n)}

def calculate_result(colors: list):
    output = ''

    for color in colors:
        if not output:
            output = color
        else:
            output = results[output + color]

    return output

for i, row in enumerate(grid):
    if len(set(row)) == 1:
        output[i]["color"] += row[0]
        output[i]["result"] = calculate_result(list(output[i]["color"]))

print(output)