"use strict"

console.log('work');


window.onload = function (){

    // document grabs the html 

    let theButton = document.querySelector("#theButton");

    theButton.addEventListener("click",displayTime);



}

function displayTime(){
    console.log("you clicked theButton");

    let theDate = document.querySelector("#theDate");
    let theParagraph = document.querySelector("#theParagraph")
    console.log(theDate.value)

    let generatedDate = new Date(theDate.value);


    theParagraph.innerHTML = generatedDate.toLocaleString();
}


// let d = new Date("09/09/3003");
// console.lod(d.toString());


// miliseconds
// let g = Date.parse("08-30-2005");
// console.log(d);


// let milliSec = Date.parse("May 1, 2022");
// let d = new Date(milliSec);

