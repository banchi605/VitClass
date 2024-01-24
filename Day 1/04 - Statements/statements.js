var x = 10; // Variable declaration statement

function sayHello() { /* Function declaration statement */ }

class Person { /* Class declaration statement */ }

var y = 20; // Variable assignment statement
var object = {};
object.property = "New Value"; // Property assignment statement

var condition = true;
if (condition) {
  console.log("The condition is true");
} else {
  console.log("The condition is false");
}

for (var i = 0; i < 5; i++) {
  console.log("Iteration " + i);
}

var j = 0;
while (j < 3) {
  console.log("While loop iteration " + j);
  j++;
}

function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Alice"); // Function invocation statement

function add(a, b) {
  return a + b; // Return statement
}
var sum = add(5, 3);
console.log("Sum: " + sum);

for (var k = 0; k < 5; k++) {
  if (k === 3) {
    break; // Exit the loop
  }
  console.log("Break Example: " + k);
}

for (var l = 0; l < 5; l++) {
  if (l === 2) {
    continue; // Skip the current iteration
  }
  console.log("Continue Example: " + l);
}

var value = "B";
switch (value) {
  case "A":
    console.log("Case A");
    break;
  case "B":
    console.log("Case B");
    break;
  default:
    console.log("Default Case");
}

try {
  throw new Error("An error occurred");
} catch (error) {
  console.error("Caught an error: " + error.message);
}

outerLoop: for (var m = 0; m < 3; m++) {
  innerLoop: for (var n = 0; n < 3; n++) {
    if (m === 1 && n === 1) {
      break outerLoop; // Breaks out of the outer loop
    }
  }
}
