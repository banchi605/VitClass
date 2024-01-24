function validateForm() {
    let x = document.forms["contactform"]["first", "last", "email"].value;
    if (x == "") 
    {
    alert("First Name, Last Name, and Email Fields must not be left blank");
    return false
    }

}

function exit() {
    alert("Thank you for visiting!")
}

function createList() {
    var listContainer = document.getElementById("listContainer");
    var items = ["This was pretty complicated", "I did have fun", "onward to learning"];
    items.forEach(function(item) {
      var listItem = document.createElement("li");
      listItem.textContent = item;
      listContainer.appendChild(listItem);
    });
  }