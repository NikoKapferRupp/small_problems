function findFibonacciIndexByLength(num) {
    let fibonacciNum = [1n, 1n];
    let numDigit = '1'
    for(let i = 1n; i < num; i += 1n) {
        numDigit += '0';
    };

    numDigit = parseInt(numDigit);   
        
    for(let index = 2n; fibonacciNum[index - 1n] < numDigit; index += 1n) {
        fibonacciNum.push(BigInt(fibonacciNum[index - 2n] + fibonacciNum[index - 1n]));
    }
         
  

    return BigInt(fibonacciNum.length);
};

console.log(findFibonacciIndexByLength(2n) === 7n);
console.log(findFibonacciIndexByLength(3n) === 12n);
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

//findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
//findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
//findFibonacciIndexByLength(10n) === 45n;
//findFibonacciIndexByLength(16n) === 74n;
//findFibonacciIndexByLength(100n) === 476n;
//findFibonacciIndexByLength(1000n) === 4782n;
//findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.