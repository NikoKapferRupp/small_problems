function stringy(int) {
    let arr = [];
    
    for(let i = 0; i < int; i++) {
        if(i % 2 === 0) {
            arr.push('0');
        } else {
            arr.push('1');;
        };        
    };  
    console.log(arr.join(''));
    return(arr.join(''));
}; 

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

