//object literals
// const person={
//    firstName:'SURaj',
//    age:'31',
//    hobbies:['eat','sleep','code'],
//    address:{
//       city:'Hassan',
//       state:'Karnataka'
//    },
//    getbirthyear:function(){
//       return 2024-person.age;
//    }, 
// }
// let val;
// val=person
// console.log(val.getbirthyear());
// console.log(person.firstName);

const people=[
   {
      firstname:'Suraj',
      Surname:'Gowda'
   },
   {
      firstname:'Abhishek',
      Surname:'Kumar'
   }
]
// console.log(people[0].firstname);
for(let i=0;i<people.length;i++){
   console.log(people[i].Surname);
   
}