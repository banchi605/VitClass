function changeheader() {
let header = document.querySelector("#header");
header.textContent = "Welcome to the DOM Manipulation Exercise "}

function addNewElement() {
    var newElement = document.createElement("p");
    newElement.textContent = "This is a dynamically added paragraph.";
    document.getElementById("newElementContainer").appendChild(newElement);
}

function itemmove() {
const elementtomove = document.querySelector(".item")
const newparent = document.querySelector("#itemList")
newparent.appendChild(elementtomove) }

function removeitem() {
    const elementtoremove = document.querySelector(".item2")
    elementtoremove.remove();
}
document.getElementById("styleButton").addEventListener(
"click", color)

function color(){
let color = document.querySelector("#itemList")
color.style.color = "white"
color.style.backgroundColor = "lightblue" }

let newinput = document.querySelector("#content")
newinput.setAttribute(textContent="new")
newinput.appendChild(newinput)

function newdiv() {
let newdiv=<div id="info">This div was created using a template string!</div>;
document.content.innerHTML =newdiv;
}
