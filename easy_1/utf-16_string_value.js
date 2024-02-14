function utf16Value(string) {
    let sum = 0;

    for(let charPos = 0; charPos < string.length; charPos += 1) {
        sum += string.charCodeAt(charPos);
        //console.log(string.charCodeAt(charPos));        
    };
    console.log(sum);
    return sum;
};

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

