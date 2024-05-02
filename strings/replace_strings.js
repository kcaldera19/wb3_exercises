"use strict"

let message = "Our corporate offices are locted in Dallas";
let newMessage = message.replace(/Dallas/g,"Austin");
console.log(newMessage);


let text = "Our corporate offices are locted in AuStin";
let newText = text.replace(/austin/i,"Dallas");
console.log(newText);