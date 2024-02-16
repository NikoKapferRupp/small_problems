function triangle(num) {
    console.log();
    for(let i = 1; i <= num; i += 1) {
        console.log(' '.repeat(num - i) + '*'.repeat(num - (num - i)));
    }; 
};

triangle(5);
triangle(9);
triangle(50);