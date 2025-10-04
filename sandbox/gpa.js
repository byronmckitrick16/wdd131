function getGrades() {
    const gradesElement = document.querySelector("#grades");
    let grades = gradesElement.value.split(",");
    grades = grades.map((grade) => grade.trim().toUpperCase());
    return grades
};

function convertGradeToPoints(grade) {
    if (grade === "A"){
        gpa = 4;
    } else if (grade === "B"){
        gpa = 3;
    } else if (grade === "C"){
        gpa = 2;
    } else if (grade === "D"){
        gpa = 1;
    } else if (grade === "F"){
        gpa = 0;
    };
    return gpa
};

function calculateGpa(gpaPoints) {
    const sum = gpaPoints.reduce((sum, gpa) => sum + gpa);
    const gpa = sum / gpaPoints.length;
    return gpa
};

function eventHandler(event) {
    const grades = getGrades();
    const gpaPoints = grades.map(convertGradeToPoints);
    const gpa = calculateGpa(gpaPoints);
    outputGpa(gpa);
};

function outputGpa(gpa) {
    const outputElement = document.querySelector("#output")
    outputElement.textContent = gpa
};

document.querySelector("#submitButton").addEventListener("click", eventHandler);