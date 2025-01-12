//switches

// const color="brown"
// switch (color) {
//    case "red":
//       console.log("color is red");
//       break;
//    case "blue":
//       console.log("color is blue");
//       break;   
//    default:
//       console.log("color is other");
      
//       break;
// }
//-----------------------------------------------------------
// const dayOfWeek=new Date().getDate()  
// console.log(dayOfWeek);
 

//-----------------------------------------------------------

// let week=new Date().getDay()
// for(let i=0,i<week.length;i++){
//    console.log(i);
// } 
//-----------------------------------------------------------
const dayofweek=new Date().getDay()
let day
switch (dayofweek) {
   case 0:
      console.log("Sunday");
      break;
   case 1:
      console.log("Monday");
      break;
   case 2:
      console.log("Tuesday");
      break;
   case 3:
      console.log("Wednesday");
      break;
   case 4:
      console.log("Thursday");
      break;
   case 5:
      console.log("Friday");
      break;
   case 6:
      console.log("Saturday");
      break;
   default:
      console.log("Otherday");   
      break;
}
console.log(day);

// console.log(dayofweek);


//-----------------------------------------------------------