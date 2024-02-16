const readlineSync = require("readline-sync");

let today = new Date();

let currentYear = today.getFullYear();

let currentAge = readlineSync.question('What is your age? '); 
let retireAge = readlineSync.question('At what age would you like to retire? ');

console.log(`It's ${currentYear}. You will retire in ${currentYear + (retireAge - currentAge) }`);
console.log(`You have only ${retireAge - currentAge} years of work to go!`);

