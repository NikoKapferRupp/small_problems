const readlineSync = require("readline-sync");

let noun = readlineSync.question('Enter a noun: ');
let verb = readlineSync.question('Enter a verb: ');
let adjective = readlineSync.question('Enter an adjective: ');
let adverb = readlineSync.question('Enter an adverb: ');

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over to the lazy ${noun}.`);
console.log(`The ${noun} ${adverb} ${verb}s up to Joe's blue turtle.`);