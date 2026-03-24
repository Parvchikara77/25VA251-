
function result(){
let inputValue=document.getElementById('inputData').value;

console.log(inputValue);
let displayHeading=document.getElementById('text');

displayHeading.innerHTML=inputValue;

displayHeading.style.color="red"

document.getElementsByTagName('body')[0].style.backgroundColor="lightblue";
}

//addEventListener method

let paraBkg=document.getElementById('para');

function colorChange(){
    paraBkg.style.backgroundColor=
    "lightgreen";


}
paraBkg.addEventListener('mouseout',colorChange);
