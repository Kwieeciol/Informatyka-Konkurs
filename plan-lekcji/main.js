const prompt = require("prompt-sync")();

function count_occurences (arr, val) {
    return arr.reduce((acc, elem) => {
        return (val === elem ? acc + 1 : acc)
    }, 0);
};

let n = Number(prompt("Ile godzin spędza na uczelni? "))

let godziny = prompt("> ").replaceAll("0 0", "1").split(" ").map(x => parseInt(x));

console.log(count_occurences(godziny, 1));