function century(year) {    
    if(year % 100 === 0) {
        let century = year / 100;
        return century.toString() + rightEnding(century);
    } else {
        let century = Math.floor(year / 100 + 1);
        return century.toString() + rightEnding(century);
    };   
};

function rightEnding(century) {
    lastDigit = century % 10;
    switch (lastDigit) {
        case 1:
            return 'st';
            break;
        case 2:
            return 'nd';
            break;
        case 3:
            return 'rd';
            break;
        default:
            return 'st';
            break;
    };
};

console.log(
    century(2000),      // "20th"
century(2001) ,       // "21st"
century(1965),        // "20th"
century(256)  ,       // "3rd"
century(5)     ,      // "1st"
century(10103)  ,     // "102nd"
century(1052)  ,      // "11th"
century(1127)  ,      // "12th"
century(11201)  ,     // "113th"
)