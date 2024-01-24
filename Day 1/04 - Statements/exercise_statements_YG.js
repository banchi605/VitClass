//Task 1: Declaration Statment//
var x = 10
 function sayHello() {
    console.log("Hello Bill")
 }
 sayHello()

//Task 2: Assignment Statements//
x = 20;
var myObject = {};
myObject.property = "New Value";

//Task 3: Conditional Statements//
if (x > 15) {
    console.log("Greater") 
 } else {
    console.log("Smaller or equal")
 }
  
//Task 4: Looping Statement//
for (let i = 0; i < 5; i++) {
    console.log("number " + i)
}

var p = 0 
while(p < 5) {
    console.log("While Number " + p); p++
}

//Task 5: Function Invocation//
function sayFriend() {
    console.log("Hi World!")
}
sayFriend()

//Task 6: Return Statements//
function sum(a, b) {
    return a + b;
}
var sum = sum(10, -3);
console.log("Total: " + sum);

//Task 7: Break and Conintue Statements//
    for (var k = 0; k < 10; k++) {
        if (k === 5) {
          break; // Exit the loop
        }
        console.log("Break Example: " + k);
      }

    for (var b = 0; b < 10; b++) {
        if (b === 5) {
            continue;
        }
        console.log("Continue=" + b);
    }

//Task 8: Switch Statements//
let value = "K";
switch(value) {
    case "A":
        console.log("Case A");
        break;
    case "B":
        console.log("Case B");
        break;
    default: 
    console.log("Default Case");
}

//Task 9: Throw and Try-Catch Statements//
try {
    throw new Error("This did not quite work!");
} catch(error) {
    console.error("Uh-Oh, " + error.message);

}

//Task 10: Label Statement//
outerLoop: for (var s = 0; s < 4; s++) {
    innerloop: for (var u = 0; u < 4; u++) {
        if (s === 2 && u === 2) {
            break outerLoop;
        }
    }
}
// Objective:

// This exercise is designed to help you understand and practice using different types of statements in JavaScript. By completing this task, you will gain familiarity with declarations, assignments, conditionals, loops, function invocations, and more.

// Tasks:

    // Declaration Statements:
    //     Declare a variable x with the value 10.
    //     Declare a function sayHello that logs "Hello" to the console.

    // Assignment Statements:
    //     Assign a new value 20 to the variable x.
    //     Create an object myObject and assign a new property property with the value "New Value".

    // Conditional Statements:
    //     Write an if-else statement to check if x is greater than 15. Log "Greater" if true, otherwise log "Smaller or Equal".

    // Looping Statements:
    //     Write a for loop that iterates from 0 to 4 and logs each number.
    //     Write a while loop that logs numbers from 0 to 4.

    // Function Invocation Statements:
    //     Invoke the sayHello function.

    // Return Statements:
    //     Create a function add that takes two parameters, a and b, and returns their sum.

    // Break and Continue Statements:
    //     Inside a loop from 0 to 9, use break to exit the loop when the counter is 5.
    //     Inside another loop, use continue to skip the rest of the loop when the counter is 5.

    // Switch Statements:
    //     Write a switch statement for a variable value with cases 'A' and 'B' and a default case.

    // Throw and Try-Catch Statements:
    //     Use try-catch to handle an intentional error (throw new Error("Test Error")).

    // Label Statements:
    //     Use label statements in nested for loops to break out of the outer loop when certain conditions are met.