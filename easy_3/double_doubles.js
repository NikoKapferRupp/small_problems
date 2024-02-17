function twice(num) {

    let numArr = Array.from(String(num), Number);

    if(numArr.length % 2 === 0) {
        for(let i = 0; i < numArr.length; i += 1) {
            if(numArr[i] === numArr[numArr.length / 2 + i]) {
                return num;
            } else { return num * 2 }
        };
    } else {
        return num * 2;
    };
};

console.log(
twice(37),            // 74
twice(44),           // 44
twice(334433),      // 668866
twice(444),         // 888
twice(107),         // 214
twice(103103),      // 103103
twice(3333),         // 3333
twice(7676),          // 7676
);