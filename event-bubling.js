// //Event Bubling

// document.querySelector(".card-title").addEventListener("click",function () {
// console.log('card-title');
   
// })

// document.querySelector(".card-content").addEventListener("click",function () {
//    console.log('card-content');
      
//    })
   
//    document.querySelector(".card").addEventListener("click",function () {
//       console.log('card');
         
//       })   

//       document.querySelector(".col").addEventListener("click",function () {
//          console.log('col');
            
//          })   
// //----------------------------------------------------------------------------
// //Event Delegation

// const delItem=document.querySelector(".delete-item")

// delItem.addEventListener("click",removeELement)
// function removeELement() {
//    console.log("Item deleted");   
// }
// //----------------------------------------------------------------------------

// // body

// document.body.addEventListener("click",removeELement);
// function removeELement() {
//    console.log("Item-deleted");
//    console.log(e);
//    console.log(e.target);
//    if(e.target.parentElement.className == 'delete-item'){
//       console.log("delete-item");
      
//    }
// }

// //-------------------------------------------------------------

// document.body.addEventListener("click",removeELement);
// function removeELement() {
//    console.log("Item-deleted");
//    console.log(e);
//    console.log(e.target);
//    if(e.target.parentElement.classList.contains('delete-item')){
//       e.target.parentElement.parentElement.remove()      
//    }
// }

// //---------------------------------------------------------------------

//Local and Session storage

//localStorage.setItem("name","Suraj");

//sessionStorage.setItem("name","Gowda")


// const name=localStorage.getItem("name");
// console.log(name);
//-------------------------------------------------------------
//remove Item

// localStorage.removeItem("name")

// const name=localStorage.getItem("name");
// console.log(name);
//----------------------------------------------------------------

// localStorage.setItem("name","Suraj");
// localStorage.setItem("age",31);
// const name=localStorage.getItem("name");
// const age=localStorage.getItem("age");
// console.log(name,age);

// localStorage.clear()

//-------------------------------------------------------------------------------
document.getElementById("task-form").addEventListener("submit",addtoLocal);
function addtoLocal(e) {
   const task=document.getElementById("task").value
   let tasks
   if(localStorage.getItem("tasks")==null){
      tasks=[]
      }
      else{
         tasks=JSON.parse(localStorage.getItem("tasks"))
      }
      tasks.push(task)
      localStorage.setItem("tasks",JSON.stringify(tasks))
      alert("task saved")
      e.preventDefault();
   
}