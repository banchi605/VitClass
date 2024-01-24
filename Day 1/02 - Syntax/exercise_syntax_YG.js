//Task 1 and 2//
var number= 48
var text= "I am 48 years old"
var isTrue= true
const cars= ["Tesla, Mazda, Chevy"]
var person= {name:"Yorgie", age: 99}

let age=77
var name= "Bill"
let stores= "Mila"

console.log("Hello " +  person.name + ", is your age " + person.age + "?") //Test 1 which outputs the hello person//
console.log("My age is " + age) /* This is the second test in my exercise,
the question is did we do it right? It provides a static number as the age element */
console.log("Are you " + name + "?")


//Task 3//
console.log(typeof "Yorgie")
console.log(typeof true)
console.log(typeof 48)

//Task 4//
let y = 9 + 25;
let c = 24 - 9;
let x = y + c; 

console.log("X equals " + x)
console.log("Y minus C equals " + (y-c))

//Task 5//
function sayHello(name)
{ console.log("Hello," + name + "!")}
sayHello(name)

function sayBye(stores)
{ console.log("We will see you later, " + stores)}
sayBye(stores)

//Task 6//
var day= 75
if (day >=70)
{console.log("You are old as heck!")}
else {console.log("You are still young!")}

//Task 7//
for (var i= 0; i < 5; i++)
{console.log("The car is " + i);}


//Task 8//
let fav= {make: "Chevy", model: "Silverado", year: 2017}
console.log(fav.make, fav.year)

let store= ["target","walmart","ross"]
console.log(store[2])
console.log(store[1])




// Objective

// This exercise aims to familiarize you with the fundamental elements of JavaScript syntax by writing and testing JavaScript code.

// Tasks

// Task 1: Working with Statements and Variables
//     Create a file named javascriptsyntax.js.
//     Write statements to declare variables using var, let, and const. Assign different data types to these variables.
//     Use console.log() to output the values of these variables.

// Task 2: Utilizing Comments
//     Add both single-line and multi-line comments to your javascriptsyntax.js file, explaining what each block of code does.

// Task 3: Exploring Data Types
//     Create variables for different data types (number, string, boolean, array, and object).
//     Use console.log() to display the type of each variable using typeof.

// Task 4: Implementing Operators
//     Perform basic arithmetic operations and comparisons between variables.
//     Output the results using console.log().

// Task 5: Creating and Calling Functions
//     Write a function that takes a name as a parameter and logs a greeting.
//     Call this function with different names.

// Task 6: Conditional Statements
//     Write an if-else block that checks the value of a variable and logs different outputs.
//     Test this with different values.

// Task 7: Writing Loops
//     Write a for loop and a while loop that iterate a certain number of times, logging each iteration.

// Task 8: Working with Objects and Arrays
//     Create an object and an array, each with multiple elements.
//     Use console.log() to access and display specific elements from the object and array.