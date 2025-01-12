//template literals

const name="Suraj"
const age=25
const job="web developer"
const city="Hassan"

let html;

// without using template literals, ES5, we are going to render 
// HTML to browser with JS 

html =
'<ul><li>Name:' 
+ name + 
'</li><li>Age:'
 +age+
 '</li><li>job:'
 +job+
'</li><li>'
+city+
'</li></ul>';
document.body.innerHTML=html;

//with template literals

html=`
<ul>
<li>Name:${name}</li>
<li>Age:${age} </li>
<li>Job:${job} </li>
<li>city:${city}</li>
</ul>
`;
document.body.innerHTML=html;