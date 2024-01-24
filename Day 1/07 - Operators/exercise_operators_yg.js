//Task 1: Arithmetic Operator//
var addex = 10 + 18;
var subex = 99-72;
var mulex = 12 * 3;
var divex = 18 / 6;
var modex = 17 % 3;

var task = document.getElementById("output")

task.innerHTML = "Add: " + addex + "<br>"
task.innerHTML += "Sub: " + subex + "<br>"
task.innerHTML += "Mul: " + mulex + "<br>"
task.innerHTML += "Div: " + divex + "<br>"
task.innerHTML += "Mod: " + modex + "<br>"

//Task 2: Assignment Operators//
var y = 90;
y += 77;
y -= -25;
y *= 12;
y /= 5;
y %= 8;

task.innerHTML += "Assignment: " + y + "<br>"

//Task 3: Comparison Operators//
let g = 10
task.innerHTML += "Equal to: " + (g == "9") + "<br>"
task.innerHTML += "Strictly not equal: " + (g !== "12") + "<br>"
task.innerHTML += "Greater than: " + (g > "25") + "<br>"
task.innerHTML += "Less than or equal to: " + (g <= "88") + "<br>"

//Task 4: Logical Operators//
let j = 6
let t = 3

task.innerHTML += "Logical AND: " + (j < 10 && t > 1) + "<br>"
task.innerHTML += "Logical NOT: " + !(j == t) + "<br>"

//Task 5: Increment/Decrement//

let d = 99; d++; let z = d;
task.innerHTML += "Incremental: " + z + "<br>"
let r = 129; r--; let p = r - 88;
task.innerHTML += " Decremental: " + p + "<br>"

//Task 6: String//
let t1 = "My name is";
let t2 =  "Slim Shady";
let result = t1.concat(" ",t2);

task.innerHTML += "String Conc: " + result + "<br>"

//Task 7: Ternary Operator//
function myFunction() {
    let age = document.getElementById("age").value;
    let text = (age < 18) ? "Too young":"Old enough";
    document.getElementById("demo").innerHTML = text + " to vote.";
  }

//Task 8: Typeof Operator//

task.innerHTML += 
"George is " + typeof "George" + "<br>" +
"true is " + typeof true + "<br>" +
"myCar is " + typeof myCar + "<br>"

//Task 9: Bitwise Operator//
task.innerHTML += (9 & 3) + "<br>"
task.innerHTML += (12 | 9) + "<br>"
task.innerHTML += (12 ^ 11) + "<br>"


 // Objective:

// Understand and apply different types of operators in JavaScript by completing a set of tasks that involve arithmetic, assignment, comparison, logical, and other operators.

// Tasks:

    // Arithmetic Operators:
    //     Perform basic arithmetic operations (addition, subtraction, multiplication, division, modulus) on two numbers and log the results to the console.

    // Assignment Operators:
    //     Initialize a variable and then use different assignment operators to update its value. Display each new value.

    // Comparison Operators:
    //     Compare two values using each comparison operator and log whether each statement is true or false.

    // Logical Operators:
    //     Create a few Boolean expressions using logical operators and evaluate their results.

    // Increment/Decrement Operators:
    //     Use the increment and decrement operators on a number and log the pre and post-increment/decrement values.

    // String Concatenation:
    //     Concatenate two strings using the + operator and log the result.

    // Ternary Operator:
    //     Use the ternary operator to create a simple conditional expression and log the output.

    // Typeof Operator:
    //     Use the typeof operator on different data types and log the results.

    // Bitwise Operators:
    //     Experiment with at least two bitwise operators and log the outcomes.

    // Elvis Operator (Optional - Advanced):
    //     Use the Elvis operator for conditional assignment and log the result.

    // Spread Operator (Optional - Advanced):
    //     Use the spread operator to combine two arrays or objects and log the result.

    // Object Destructuring (Optional - Advanced):
    //     Destructure an object into variables and log them.