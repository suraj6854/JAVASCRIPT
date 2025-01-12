//replace and remove items

// create element

const newHeading=document.createElement("h2")

//add id

newHeading.id="task-title"
console.log(newHeading);

//create node

newHeading.appendChild(document.createTextNode("Microdegree"))

//get the old heading

const oldHeading=document.getElementById("task-title")
 
//get parent

const cardAction=document.querySelector(".card-action")

//replace

cardAction.replaceChild(newHeading,oldHeading)

//remove

const list=document.querySelectorAll("li") 
const list=document.querySelector('ul') 
list[0].remove()
//remove child
list.removeChild(lis[3])
console.log(lis);
 
