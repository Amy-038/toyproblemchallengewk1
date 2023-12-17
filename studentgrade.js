//Creating a named function studentGradeGenerator() using the function keyword and giving it a parameter of studentMarks
function studentGradeGenerator(studentMarks) {
    if (studentMarks > 79) {
        //an if statement with a condition of studentMarks>79
        return "A";
        //statement returns A if argument fulfils condition
    } else if (studentMarks <= 60 && studentMarks >= 79) {
        // an else if statement with a condition of studentMarks being in a range of 60-79
        return "B";
        //return statement if condition is true
    } else if (studentMarks <= 59 && studentMarks >= 49) {
        // an else if statement with a condition of studentMarks being in a range of 49-59        
        return "C";
        //return statement if condition is true
    } else if (studentMarks < 49 && studentMarks >= 40) {
        // an else if statement with a condition of studentMarks being in a range of 40-49
        return "D";
        //return statement if condition is true
    } else {
        // an else statement for the remaining marks .ie. studentMarks > 40
        return "E";
        //return statement if condition is true
    }
}

//test the code by running this on the terminal using node studentgrade.js
console.log(studentGradeGenerator(53));
//=>C