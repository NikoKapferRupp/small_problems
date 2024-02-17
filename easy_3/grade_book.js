function getGrade(gradeA, gradeB, gradeC) {
    let averageGrade = (gradeA + gradeB + gradeC) / 3;
    averageGrade = (Math.floor(averageGrade / 10)) * 10;

    switch (averageGrade) {
        case 90:
            return 'A';            
            break;
        case 80:
            return 'B';            
            break;   
        case 70:
            return 'C';            
            break;
        case 60:
            return 'D';            
            break;
        default:
            return 'F';
            break;
    };
};

console.log(
    getGrade(95, 90, 93),
    getGrade(50, 50, 95));