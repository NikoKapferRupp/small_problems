const regex = /[^a-z]/g

function cleanUp(str) { 
    return whiteSpaceKiller(str.replaceAll(regex, ' ' ));
};

function whiteSpaceKiller(str) {
    if(str.includes('  ')) {
        str = str.replaceAll('  ', ' ');
        str = whiteSpaceKiller(str);
    };
    return str;
};

console.log(cleanUp("---what's my +*& line?"));


