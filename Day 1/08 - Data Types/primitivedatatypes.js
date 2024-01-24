// Number Example
var age = 30;
var price = 9.99;
document.getElementById("numberExample").innerHTML = "Age: " + age + "<br>Price: " + price;

// String Example
var name = "Alice";
var message = 'Hello, World!';
document.getElementById("stringExample").innerHTML = "Name: " + name + "<br>Message: " + message;

// Boolean Examples
var isAdult = true;
var hasPermission = false;
document.getElementById("booleanExample1").innerHTML = "Is Adult: " + isAdult;
document.getElementById("booleanExample2").innerHTML = "Has Permission: " + hasPermission;

// Undefined Example
var x;
document.getElementById("undefinedExample").innerHTML = "Undefined Variable (x): " + x;

// Null Example
var user = null;
document.getElementById("nullExample").innerHTML = "Null Variable (user): " + user;

// Symbol (ES6) Example
var uniqueID = Symbol("id");
document.getElementById("symbolExample").innerHTML = "Symbol ID: " + uniqueID.toString();

// BigInt (ES11) Example
var bigInteger = 1234567890123456789012345678901234567890n;
document.getElementById("bigIntExample").innerHTML = "BigInt Example: " + bigInteger;
