"use strict"



function parseAndDisplayName(someName) {


    let fullName = someName;


    //find  position of first space
    let spacePosition = fullName.indexOf(" ");

    // get postion of first name starting at 0
    let firstName = fullName.substring(0, spacePosition);

    // added 1 to the starting position to get passes the space postion
    let lastName = fullName.substring(spacePosition + 1);

    console.log(`
    Name: ${fullName}
    First name: ${firstName}
    Last name: ${lastName}`)

}
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");




