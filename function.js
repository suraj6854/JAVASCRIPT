//function declaration and expression

// function greet() {
//    console.log("hai suraj");      
// }
// greet()
//-----------------------------------------------------------
// function greet() {
//    return "hai suraj how are you"      
// }
// console.log(greet());
//-----------------------------------------------------------
// function greet(firstname) {
//    return `Hello ${firstname}`     
// }
// console.log(greet('H M suraj Gowda'));
//-----------------------------------------------------------
// function greet(firstname="suraj") {
//    return `Hello ${firstname}`     
// }
// console.log(greet());
//-----------------------------------------------------------
// const val = function (firstname) {
//    return "Hello"     
// }
// console.log(val());
//-----------------------------------------------------------
// const val = function (a,b) {
//    return a*b     
// }
// console.log(val(4,3));
//-----------------------------------------------------------
//IIFI:- Imediately Invoke Function Expression
// (function (name) {
// console.log(`${name} ran`);
// })("suraj")
//-----------------------------------------------------------
const person={
   getbirthday: function(day){
      return `June ${day}`
   }
}
console.log(person.getbirthday(2));


//-----------------------------------------------------------
