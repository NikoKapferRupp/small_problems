function centerOf(str) {
    if(str.length % 2) {
       return str[Math.floor(str.length / 2)];
    } else {
        return str.slice(Math.floor(str.length / 2 - 1), (Math.floor(str.length / 2 + 1)));
    };
};


console.log(centerOf('I Love JavaScript'));
console.log(centerOf('Launch School'));
console.log(centerOf('Launch'));
console.log(centerOf('Launchschool'));
console.log(centerOf('x'));
