// Enter marks
const studentMarks = parseInt(prompt("Enter the student's marks (between 0 and 100):"));

// Chec input velue
if (studentMarks >= 0 && studentMarks <= 100) {
    // Give Grade
    let grade;
    if (studentMarks > 79) {
        grade = 'A';
    } else if (studentMarks >= 60 && studentMarks <= 79) {
        grade = 'B';
    } else if (studentMarks >= 50 && studentMarks <= 59) {
        grade = 'C';
    } else if (studentMarks >= 40 && studentMarks <= 49) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Output the grade
    console.log(`The student's grade is: ${grade}`);
} else {
    console.log("Invalid input. Please enter a number between 0 and 100.");
}
