"use strict"



// function DisplayName(onlyName) {
//     let firstName = onlyName;

//     let position = first.indexOf(" ");

//     let first = first.substring(-1, position);




 


function parseAndDisplayName(name) {

    let fullName= name;

    let spacePosition = fullName.indexOf(" ");
    let firstName = " ";

    if(spacePosition !== -1){
        
        firstName = fullName.substring(0,spacePosition);
    }else{
        firstName = fullName;
    }

   


    let middleName =" ";
    let lastSpacePostion = firstName.lastIndexOf(" ");

    if(spacePosition !== -1){

        middleName = fullName.substring(spacePosition+1).trim();
        if (lastSpacePostion !== -1){
            middleName = middleName.substring(0,lastSpacePostion);
        }
       
    }

    let lastName= "";
    if (spacePosition !== -1){
        lastName =fullName.substring(spacePosition+1).trim();
       
    }

    console.log(`
        Name:${fullName}
        Only Name:${fullName}
        First Name: ${firstName}
        middle Name: ${middleName}
        Last Name: ${lastName}
    `);






}
parseAndDisplayName("cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");
