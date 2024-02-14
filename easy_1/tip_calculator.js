let readlineSync = require("readline-sync");

let bill = Number.parseInt(readlineSync.question("What is the bill? "));
let tip = Number.parseInt(readlineSync.question("What is the tip percentage? "));

console.log(`The tip is $${bill / 100 * tip}`);
console.log(`The total is $${bill / 100 * tip + bill}`);