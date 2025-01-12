// const circle={
//    name:'suraj',
//    add:'Hassan',
//    find :function () {
//       console.log(`his address is ${this.add}`);
         
//    },
// }

// circle.find()

//------------------------------------------------------------------------

// factory function will always return an object

// function createCircle(radius) {
//    return{
//       name:'Sphere',
//       radius:radius,
//       draw:function () {
//          console.log(`i will draw a circle of radius ${this.radius}`);
                  
//       },
//    }
// }
// const circle1=createCircle(10)
// console.log(circle1.radius);

//---------------------------------------------------------------------------------------

function createCircle(radius,name) {
   return{
      name:name,
      radius:radius,
      draw:function () {
         console.log(`i will draw a circle of radius ${this.radius}`);
                  
      },
   }
}
const circle1=createCircle(10,'god')
console.log(circle1.radius,circle1.name);



// //--------------------------------------------------------------------------------------
// function createCircle() {
//    return{
//       name:'Suraj',
//       address:'Hassan',
//       draw:function () {
//          console.log(`${this.name} from ${this.address}`);
                  
//       }
//    }
// }
// const circle1=createCircle()
// console.log(circle1);


// circle1.draw()
