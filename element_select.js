//single element selector
//document.getElementById


console.log(document.getElementById("task-title"));
console.log(document.getElementById("task-title").id);
console.log(document.getElementById("task-title").className);

// change style 
const taskTitle = document.getElementById("task-title")

taskTitle.style.backgroundColor="black"
taskTitle.style.color="white"
taskTitle.style.padding="5px"

//textcontent
taskTitle.textContent="microdegree"
taskTitle.innerText="MicroDegree"
taskTitle.innerHTML="<span style = color:red>Task list</span> "

//document.queryselector

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector("li").style.color="red";
document.querySelector("li:last-child").style.color="red"; 
document.querySelector("li:nth-child(2)").style.color="blue"; 

//select multiple elements
//document.getElementsByClassName

// const items=document.getElementsByClassName('collection-item')
// console.log(items);
// items[0].style.color="red"
// items[3].textContent="hello"

//getElementsByTagName

const items=document.getElementsByTagName('li')
console.log(items);
items[0].style.color="blue"
items[3].textContent="hello"


//querySelectorAll() Node list-> no need to convert an array
const lis = document.querySelectorAll("li.collection-item");
console.log(lis);

lis.forEach(function (li) {
   li.textContent = "Hello"
})

const liOdd=document.querySelectorAll("li:nth-child()odd");
console.log(liOdd);

liOdd.forEach(function (li) {
   li.style.backgroundColor="#ccc"   
})

const liEven=document.querySelectorAll("li:nth-child()Even");
console.log(liEven);

liEven.forEach(function (li) {
   li.style.backgroundColor="#ccc"   
})