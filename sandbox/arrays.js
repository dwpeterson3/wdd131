const steps = ["one", "two", "three"];
function listTemplate(step) {    
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join("");  // set the innerHTML

const grades = ["A", "B", "A", "D", "C", "A", "A"];
function gpaCalculator(grade) {
    let points = 0;
    if (grade == "A") {
        points = 4; 
    } 
    else if (grade == "B") {
        points = 3; 
    }
    else if (grade == "C"){
        points = 2;
    }
    else if (grade == "D"){
        points = 1; 
    }
    else {
        points = 0; 
    }
    return points
}
// This next variable creates a new array of the points given instead of the letter grade. 

const gpaPoints = grades.map(gpaCalculator); 

const totalPoints = gpaPoints.reduce((total, currentItem) => total + currentItem);
const gpa = totalPoints / gpaPoints.length; 


const fruits = ["watermelon", "peach", "apple", "tomato", "grape"]

const shortFruits = fruits.filter((fruit) => fruit.length <= 6);

const numbers = [12, 34, 21, 54];
let luckyNumber = 21; 

let luckyIndex = numbers.indexOf(luckyNumber); 

