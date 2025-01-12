//prototype inheritance

// function person(firstname,lastname) {
//    this.firstname=firstname,
//    this.lastname=lastname
// }
// person.prototype.getfullname=function () {
//    return `${this.firstname} ${this.lastname}`
// }

// // const p=new person("suraj","Gowda")
// // console.log(p.getfullname());


// function customer(firstname,lastname,phone,address) {
//    person.call(this,firstname,lastname)
//    this.phone=phone,
//    this.address=address   
// }
// // to access prototype method
// customer.prototype=Object.create(person.prototype)
// //to return customer constructor
// //customer.prototype.constructor=customer

// const c1= new customer("suraj","Gowda",855000056,"Hassan")
// //console.log(c1.getfullname() );
// console.log(c1);
//-------------------------------------------------------------------------------------------

//create objects using object.create 

// const personprototype ={
//    getfullname:function () {
//    return `${this.firstname} ${this.lastname}`   
//    },
//    getchangename:function (newlastname) {
//       this.lastname=newlastname
//    }
// }
// //const s=Object.create(personprototype)
// const p=Object.create(personprototype)
// p.firstname="Suraj",
// p.lastname="Gowda",

// p.getchangename("kumar")
// console.log(p.getfullname());

//-------------------------------------------------------------------------------------------------
// const personprototype ={
//       getfullname:function () {
//       return `${this.firstname} ${this.lastname}`   
//       }
//    }
// const s=Object.create(personprototype,{
// firstname:{
//    value:"Ravi",
// },
// lastname:{
//    value:"Gowda"
// }
// })   
// console.log(s);
// console.log(s.getfullname());
//------------------------------------------------------------------------------------------------------

//class
//sub-class

class person{
   constructor(firstname,lastname){
      this.firstname=firstname,
      this.lastname=lastname
   }
   getfullname(){
      return `${this.firstname} ${this.lastname}`
   }
}

class customer extends person{
   constructor(firstname,lastname,phone,address){
      super(firstname,lastname)
      this.phone=phone
      this.address=address
   }
   static add(a,b){
      return a+b
   }
   
}

const customer1=new customer("suraj","Gowda",8550000056,"hassan")
//console.log(customer1.getfullname());
//console.log(customer1);
console.log(customer.add(5,10));

