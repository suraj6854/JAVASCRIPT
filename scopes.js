//local scope
// {
//    const message='hi'
   
// }
// console.log(message);
//--------------------------------------------------------------
// function abc() {
//    const message="hi"
//    console.log(message);
// }
// abc()
//--------------------------------------------------------------
// function abc() {
//    const message="hi"
//    if(true){
//       const mem="bye"
//    }
//    console.log(mem);
// }
// console.log(message);
// abc()
//--------------------------------------------------------------
// for(let i=0;i<5;i++){
//    console.log(i);
// }
//--------------------------------------------------------------
// function pqr() {
//    const message="hi"
//    console.log(message);   
// }
// pqr()
//--------------------------------------------------------------
const color="blue" // global variable 
function abc() {
const color="red"  // local variable 
console.log(color);   
}
abc()
//--------------------------------------------------------------