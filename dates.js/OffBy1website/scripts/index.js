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