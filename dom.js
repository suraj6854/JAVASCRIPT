let val
val=document
val = document.all
val=document.all.length
val=document.all[0]
val=document.domain
val=document.head
val=document.body
val=document.doctype
val=document.URL
val=document.forms
val=document.forms[0]
val=document.links
val=document.scripts
val=document.scripts[0]

val=document.scripts[0].getAttribute("src")
let scripts=document.scripts
let scriptsArray=Array.from(scripts)
console.log(scripts);
scriptsArray.forEach(function(script){
   console.log(script);
   
})

console.log(val);
