// Using JavaScript operators

// Arithmetic operators
var additionResult = 5 + 3;
var subtractionResult = 10 - 4;
var multiplicationResult = 6 * 7;
var divisionResult = 20 / 4;
var modulusResult = 17 % 3;

// Assignment operators
var x = 5;
x += 3;  // Equivalent to x = x + 3
x -= 2;  // Equivalent to x = x - 2
x *= 4;  // Equivalent to x = x * 4
x /= 3;  // Equivalent to x = x / 3
x %= 2;  // Equivalent to x = x % 2

// Access the output paragraph element by its ID
var outputElement = document.getElementById("output");

// Display the results
outputElement.innerHTML = "Addition: " + additionResult + "<br>";
outputElement.innerHTML += "Subtraction: " + subtractionResult + "<br>";
outputElement.innerHTML += "Multiplication: " + multiplicationResult + "<br>";
outputElement.innerHTML += "Division: " + divisionResult + "<br>";
outputElement.innerHTML += "Modulus: " + modulusResult + "<br>";
outputElement.innerHTML += "Assignment (x): " + x;
