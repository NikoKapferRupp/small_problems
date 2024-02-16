function logInBox(str) {
    let borderRow = `+-${'-'.repeat(str.length)}-+`;
    let emptyRow = `| ${' '.repeat(str.length)} |`;
    
    console.log(borderRow);
    console.log(emptyRow);
    console.log(`| ${str} |`);
    console.log(emptyRow);
    console.log(borderRow);
};

logInBox('To boldly go where no one has gone before.');

