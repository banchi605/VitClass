//          Part 1          //


//Number//
let age = 45; age++
let price =  23.95; price--; price--

document.getElementById("numbers").innerHTML = "Age is: " + age + "<br>" + "<br>" + 
"Price total: " + price

//String//
let name = "Peter Pan?";
let message = "How old is ";
document.getElementById("string").innerHTML += message.concat(name)

//Boolean//
var isAwesome = false
var isMeBestfriend = true
document.getElementById("booleans").innerHTML += "Are you the best? " + isAwesome + "<br>"
document.getElementById("booleans").innerHTML += "Are you my friend? " + isMeBestfriend + "<br>" + "So now you are cool? "
+ !(isAwesome)

//Undefined//
let x;
document.getElementById("undefined").innerHTML += "x is " + typeof x

//Null//
let store = null;
document.getElementById("null").innerHTML += (store === x)

//Symbol//
let SymbolTest = Symbol("test")
document.getElementById("symbol").innerHTML += "Symbol: "  + SymbolTest.toString()

//Bigint//
let bigInteger = 11123399596894939202032n;
document.getElementById("bigint").innerHTML += "Number: " + bigInteger

//      Part 2      //
//       Part 2       //
//Object//
var fac = {
    Place:  "Crash Boat",
    City: "Aguadilla",
    State: "Puerto Rico",
};
fac.landtype = "Island"
fac.Place = "Playa Crash"

document.getElementById("object").textContent += JSON.stringify(fac, null, 2);

//Array//
let cars = ["Chevy", "Toyota", "Mazda"];
cars.pop()
cars.push("Lamborghini","Ferrari")



document.getElementById("array").textContent += JSON.stringify(cars, null, 2)

//Function//
function myLife(name) {
return "Hello, " + name + "!";
}

document.getElementById("function").textContent += myLife.toString()
document.getElementById("function").innerHTML += myLife(name)

//Date//
const j = new Date();
j.setDate(-250)

document.getElementById("date").innerHTML += j

//RegExp//
let txt = "My favorite store is Walmart";
let pttrn = /walmart/i;
let result = txt.match(pttrn);

document.getElementById("RegExp").innerHTML += result;

//Map//
let colors = new Map();
    colors.set("red",500);
    colors.set("blue",400)
    colors.set("purple", 50)
    colors.set("black",1000)
    
document.getElementById("map").innerHTML += colors.get("red")

//Set//
let places = new Set (["lake","river","ocean","pond"])
places.add ("pool")
places.delete("pond")

let ans = "";
places.forEach (function(value) { ans += value + "<br>"})

document.getElementById("set").innerHTML += ans




// Objective:

// Learn about and manipulate different JavaScript data types, including both primitive and reference types.

// Tasks:

// Part 1: Primitive Data Types

    // Number:
    //     Create a number variable and log its value.
    //     Increment the number and log the new value.

    // String:
    //     Create a string variable and log it.
    //     Concatenate another string to it and log the result.

    // Boolean:
    //     Create a Boolean variable and log it.
    //     Use a logical operator (like !) to change its value and log the new value.

    // Undefined:
    //     Create an undefined variable and log its type using typeof.

    // Null:
    //     Create a null variable and compare it with an undefined variable using == and ===, logging the results.

    // Symbol:
    //     Create a Symbol and log it.
    //     Attempt to convert it to a string and log the result.

    // BigInt:
    //     Create a BigInt variable and log it.
    //     Perform an arithmetic operation with another BigInt and log the result.

// Part 2: Reference Data Types

    // Object:
    //     Create an object with a few properties and log it.
    //     Modify a property and add a new property, then log the updated object.

    // Array:
    //     Create an array of numbers and log it.
    //     Add a new element, remove an element, and log the updated array.

    // Function:
    //     Define a function and log it.
    //     Invoke the function with arguments and log the output.

    // Date:
    //     Create a Date object for the current date and time and log it.
    //     Change the date to a different day and log the new date.

    // RegExp:
    //     Create a RegExp for a simple pattern (e.g., matching a word).
    //     Test the RegExp on a string and log the result.

    // Map:
    //     Create a Map with a few key-value pairs and log it.
    //     Add a new key-value pair, and then retrieve a value using its key.

    // Set:
    //     Create a Set with a few numbers and log it.
    //     Add a new number and then remove a number, logging the updated Set.