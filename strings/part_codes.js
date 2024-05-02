"use strict"


function getSupplier(code){
    

    let supplier = code;


    //find  position of first space
    let spacePosition = supplier.indexOf(":");

    // get postion of first name starting at 0
    supplier = supplier.substring(-0, spacePosition);

    return supplier;

}

function getProductNumber(code){
    let productNumber = code;
    
    let spacePosition = productNumber.indexOf("-");
    let position = productNumber.indexOf(":"+1);
    productNumber = productNumber.substring(position,spacePosition);
    return productNumber;

}

function getSized(code){
    let sizes= code
    let dash = sizes.lastIndexOf("-")

    sizes = sizes.substring(dash +1);
    return sizes;

}

let code= "ACME:123-L";



console.log(`The supplier code: ${getSupplier(code)}
The product Number: ${getProductNumber(code)}
The size: ${getSized(code)}`)



