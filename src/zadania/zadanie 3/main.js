let values = process.argv.slice(2).map(Number);

if (values.length != 3) {
    console.log("Proszę wpisać odpowiednią ilość parametrów");
    process.exit(1);
}

let [N, T, A] = values;
let time = [];

for (let x = 0; x < (A * 10); x += T) {
    time.push(x / 10);
}

time = time.slice(0, 40);

let amplitude = [];

for (x of time) {
    amplitude.push(Math.sin(x));
}

for (amp of amplitude) {
    let v = Math.round(A - (A * amp));
    console.log(" ".repeat(v) + ".")
}