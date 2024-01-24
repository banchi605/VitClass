// Object Example
var person = {
    name: "Alice",
    age: 30,
  };
  
  document.getElementById("objectExample").textContent = JSON.stringify(person, null, 2);
  
  // Array Example
  var colors = ["red", "green", "blue"];
  
  document.getElementById("arrayExample").textContent = JSON.stringify(colors, null, 2);
  
  // Function Example
  function greet(name) {
    return "Hello, " + name + "!";
  }
  
  document.getElementById("functionExample").textContent = greet.toString();
  