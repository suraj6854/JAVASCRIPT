//DOM Traversing

const list=document.querySelector("ul.collection")
const listItems=document.querySelector("li.collection-item")

let val
val=list;
//child nodes 
// val=list.childNodes;
// val=list.children
// val=list.children[1].textContent="hello"
// val=list.children[2].children
// val=list.firstChild
// val=list.firstElementChild
// console.log(val);


//parent node
val=listItems.parentNode;
val=listItems.parentElement
val=listItems.parentElement.parentElement
console.log(val);

//siblings

val =listItems.nextSibling
val =listItems.nextElementSibling
val=listItems.previousSibling
val=listItems.previousElementSibling
console.log(val);
//--------------------------------------------------------------------
// create an element
const li=document.createElement("li")

//add class
li.className="collection-item"

//add id
li.id="collection-list"

//set attribute
li.setAttribute("title","New Item")
console.log(li);

//text-node
const list=document.querySelector("ul.collection")
li.appendChild(document.createTextNode('Microdegree'))
const link=document.createElement("a") 
link.className="delete-item secondary-content"

// add an html icon
link.innerHTML='<i class ="fa fa-remove"></i>';
li.appendChild(link)