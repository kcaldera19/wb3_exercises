"use strict"
function convertCtoF(temp){
 const celsius =temp;
 let fahrenheit =(celsius* 9/5)+32
 return fahrenheit;
}
console.log(convertCtoF(100));
console.log(convertCtoF(45));
console.log(convertCtoF(19));
console.log(convertCtoF(0));
console.log(convertCtoF(-7));
console.log(convertCtoF(-40));