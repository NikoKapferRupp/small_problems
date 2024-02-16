const readlineSync = require("readline-sync");

let nameInput = readlineSync.question('What is your name? ');

if(nameInput.includes('!')) {
    console.log(`HELLO ${nameInput.toUpperCase().replace('!', '')}. WHY ARE WE SCREAMING?`);
} else {
    console.log(`Hello ${nameInput}.`);
};
