document.querySelector("#submitButton").addEventListener("click",clickHandler);

function getGrades(inputSelector) { 
    const grades = document.querySelector(inputSelector).value;
    const gradesArray = grades.split(",");
    const cleanGrades = gradesArray.map(grade => grade.trim().toUpperCase());
    console.log(cleanGrades);

    return cleanGrades
}
  
  function lookupGrade(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4; 
    } 
    else if (grade === "B") {
        points = 3; 
    }
    else if (grade === "C"){
        points = 2;
    }
    else if (grade === "D"){
        points = 1; 
    }
    else {
        points = 0; 
    }
    return points
    // converts the letter grade to it's GPA point value and returns it
  }
  
  function calculateGpa(grades) {
    const gradePoints = grades.map((grade) => lookupGrade (grade));
    
    const gpa = gradePoints.reduce((total, num) => total + num) / gradePoints.length;
    // gets a list of grades passed in
    // convert the letter grades to gpa points
    // calculates the GPA
    // return the GPA
    return gpa.toFixed(2);
  }
  
  function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector
    const outputElement = document.querySelector(selector);
    outputElement.innerText = gpa;
  
  }
  
  function clickHandler() {
    // when the button in our html is clicked:
    const grades = getGrades("#grades");
    // get the grades entered into the input
    const gpa = calculateGpa(grades);
    // calculate the gpa from the grades entered
    outputGpa(gpa, "#output")
    // display the gpa
  }