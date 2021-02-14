prompt = require("prompt-sync")();

const n = Number(prompt("> "));
const odpowiedzi = [];

function all(iter) {
    for (let i = 0; i < iter.length; i++) {
        if (!iter[i]) {
            return false;
        }
    }
    return true;
}

function mozna_stworzyc(literki, slowo) {
    let lst = [];
    for (l of slowo) {
        if (literki.includes(l.toUpperCase())) {
            let i = literki.indexOf(l.toUpperCase())
            literki.splice(i, 1)
            lst.push(true);
        } else {
            lst.push(false);
        }
    }
    return all(lst);
}

for (let i = 0; i < n; i++) {
    odpowiedzi.push([]);

    let [x, y] = prompt("Wpisz x oraz y: ").split(" ");
    let zbior = prompt("Wpisz zbiór liter: ").split(" ");

    for (let j = 0; j < Number(y); j++) {
        let slowo = prompt(`Wpisz slowo nr. ${j + 1}: `);
        let mozna = mozna_stworzyc([...zbior], slowo);

        if (mozna) {
            odpowiedzi[i].push("TAK");
        } else {
            odpowiedzi[i].push("NIE");
        }
    }
    console.log();
}

for (odp of odpowiedzi) {
    for (x of odp) {
        console.log(x);
    }
    console.log();
}