function crunch(str) {
    let arr = str.split('');      
    
    for(let i = 0; i < arr.length; i) {
        if(arr[i] === arr[i + 1]) {
            arr.splice(i, 1);
        } else {
            i += 1;
        };
    };
    console.log(arr.join(''));
    return arr.join('');
};

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""