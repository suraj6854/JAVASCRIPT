// constructor function

// function createCircle() {
//    (this.name='sphere'),
//    (this.radius=2),
//    (this.draw=function() {
//       console.log(`i will draw a circle of radius ${this.radius}`);
         
//    })
// }

// const circle1=new createCircle()
//console.log(circle1);
//-----------------------------------------------------------------------------

function createCircle() {
   (this.name='sphere'),
   (this.radius=2),
   (this.draw=function() {
      console.log(`i will draw a circle of radius ${this.radius}`);
         
   })
}

const circle1=new createCircle()
console.log(circle1.draw());
 