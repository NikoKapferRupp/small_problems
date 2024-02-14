function multisum(limit) {
    let sum = 0;
    
    for(let number = 0; number <= limit; number += 1)
    if(number % 3 === 0 || number % 5 === 0) {
        sum += number;
    };
    return sum;
};

    


console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(20));
console.log(multisum(1000));
