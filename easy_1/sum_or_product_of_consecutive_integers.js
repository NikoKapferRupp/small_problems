let readlineSync = require("readline-sync");

let int = Number.parseInt(readlineSync.question("Please enter an integer greater than 0: "));
let operation = readlineSync.question(`Enter "s" to compute the sum, or "p" to computer the product. `);

if (operation === 's') {
    let sum = 0;
    for(let num = 1; num <= int; num += 1) {
        sum += num;
    };
    console.log(`The sum of integers between 1 and ${int} is ${sum}.`);
} else if (operation === 'p') {
    let product = 1;
    for(let num = 1; num <= int; num += 1) {
        product *= num;
    };
    console.log(`The product of integers between 1 and ${int} is ${product}.`);
};
