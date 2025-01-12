//this keyword

// const person={
//    firstname:"suraj",
//    address:'Hassan',
//    fun:function () {
//       console.log(this);
      
//    }
// }
// person.fun()
//-------------------------------------------------------

// function abc() {
//    console.log(this);   
// }
// abc()
//----------------------------------------------------------

//this keyword using constructor

// function abc() {
//    (this.name="suraj"),
//    (this.add="hassan"),
//    console.log(this.name);
   
// }
//abc()
//or
//const p=new abc()
//-------------------------------------------------------
// function abc(name) {
//    (this.name=name),
//    (this.add="hassan"),
//    console.log(this);
   
// }
// const p=new  abc("suraj")

//--------------------------------------------------------------

// const person={
//    name:'suraj',
//    age:32,
//    getbirthday:function () {
//       return 2025-this.age   
//    },
//    hobbies:['eat','sleep',"code"],
//    getHobbies:function () {
//       this.hobbies.forEach(function (hobby) {
//          console.log(this.name,hobby);   
//       },this )
//    }
// }
// person.getHobbies();


//console.log(person.getbirthday());


//prototypes

//object prototype
// const person={
//    name:"suraj"
// }
// console.log(person);


//constructor prototype
// function person(name,address,age) {
//    this.name=name,
//    this.address=address,
//    this.age=age,
//    this.birthyear=function () {
//       return 2025-this.age
//    }
// }

// const p=new person("suraj","Hassan",32 )
// const s=new person("abhi","hassan",30)
// console.log( s.birthyear());
// console.log( p.birthyear());
//-----------------------------------------------------------------------------------

// function person(name,address,age) {
//    this.name=name,
//    this.address=address,
//    this.age=age
    // this.birthyear=function () {
    //    return 2025-this.age
    // }
// }
// person.prototype.getbirthyear=function () {
//    return 2025-this.age
// }
// person.prototype.getfullname=function () {
//    return `${this.name} from ${this.address}`
// }

// const p=new person("suraj","Hassan",32 )
// const s=new person("abhi","hassan",30)
// // console.log( s.getbirthyear());
// // console.log( p.getbirthyear()); 

// console.log(p.getfullname());  //get the full name
//----------------------------------------------------------------------------------------------
//changing the last name
function person(name,address,age) {
   this.name=name,
   this.address=address,
   this.age=age
    this.birthyear=function () {
       return 2025-this.age
    }
}
person.prototype.getbirthyear=function () {
   return 2025-this.age
}
person.prototype.getfullname=function () {
   return `${this.name} from ${this.address}`
}
person.prototype.changeaddress=function (newaddress) {
   return this.address=newaddress
}

const p=new person("suraj","Hassan",32 )
const s=new person("abhi","hassan",30)
// console.log( s.getbirthyear());
// console.log( p.getbirthyear());

//console.log(p.getfullname()); 

p.changeaddress("Bengalore");
console.log(p.getfullname());



