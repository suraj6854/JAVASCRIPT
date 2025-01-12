//event listner and event object
document.querySelector('.clear-task').addEventListener('click')
function () {
   console.log('Hello world');   
}
//-------------------------------------------------------------------
document.querySelector(".clear-task").addEventListener("click",onClick)
function onClick(e) {
   console.log(e.target);
   console.log("Hello World");
   e.preventDefault();
}
//------------------------------------------------------------------

document.querySelector(".clear-task").addEventListener("click",onClick)
function onClick(e) {
   let val;
   val=e;
   val=e.target;
   val=e.target.className
   val=e.target.classList
   e.target.innerText="Microdegree"
   val=e.type
   val=e.timeStamp
   //cordinates
   val=e.clientY;
   val=e.clientX;

   val=e.offsetY;
   val=e.offsetX;
   e.preventDefault();
   console.log(val);
   
}

//mouse events

const clearbtn=document.querySelector(".clear-task")

const card=document.querySelector(".card")

const title=document.querySelector(".h5")

//click

clearbtn.addEventListener("click",runEvent)

function runEvent(e) {
   console.log(`Event TYPE: ${e.type}`);
   e.preventDefault()
}

//mousedown

clearbtn.addEventListener("mousedown",runEvent)
function runEvent(e) {
   console.log(`EVENT TYPE: ${e.type}`);
   e.preventDefault()
}

//mouseup

clearbtn.addEventListener("mouseup",runEvent)
function runEvent(e) {
   console.log(`EVENT TYPE: ${e.type}`);
   e.preventDefault()      
}

//mouseenter

card.addEventListener("mouseenter",runEvent)
function runEvent(e) {
   console.log(`EVENT TYPE: ${e.type}`);
   e.preventDefault()   
}

//mouseleave

card.addEventListener("mouseleave",runEvent)
function runEvent(e) {
   console.log(`EVENT TYPE: ${e.type}`);
   e.preventDefault()   
}

//mousemove

card.addEventListener("mousemove",runEvent)
function runEvent(e) {
   console.log(`EVENT TYPE: ${e.type}`);
   e.preventDefault()   
}

//mousemove
card.addEventListener("mousemove",runEvent)
function runEvent(e) {
   console.log(`Event type: ${e.type}`);
   title.textContent=`MouseX :${e.offsetX} MouseY: ${e.offsetY}` 
   document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},70)`
   e.preventDefault()
}

//Keyboard Events

const form=document.querySelector("form")

const taskInput=document.querySelector("#task");

const title=document.querySelector("h5");

//form event

form.addEventListener("submit",runEvent)
function runEvent(e) {
   console.log(`Event type : ${e.type}`);
   e.preventDefault()
}

//task event

taskInput.addEventListener("keydown",runEvent)
function runEvent(e) {
   console.log(`Event type : ${e.type}`);
   console.log(e.target.value);
   e.preventDefault()
}

//empty task

taskInput.value=" "
taskInput.addEventListener("keydown",runEvent)
function runEvent(e) {
   console.log(`event type:${e.type}`);
   console.log(e.target.value);
   console.log(taskInput);
}


