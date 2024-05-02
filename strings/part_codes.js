"use strict"

// start
function getSupplier(code){
    

    let supplier = code;


    //find  position of first space
    let spacePosition = supplier.indexOf(":");

    // get postion of supplier starting at 0
    supplier = supplier.substring(0, spacePosition);

    return supplier;

}
// middle
function getProductNumber(code){
    let productNumber = code;
    // end postion
    let spacePosition = productNumber.indexOf("-");
    // start postion
    let position = productNumber.indexOf(":")+1;
    // start and end 
    productNumber = productNumber.substring(position,spacePosition);

    return productNumber;

}
// end
function getSized(code){
    let sizes= code
    let dash = sizes.lastIndexOf("-")

    sizes = sizes.substring(dash +1);
    return sizes;

}

let code= "DI:12345-M";



console.log(`The supplier code: ${getSupplier(code)}
The product Number: ${getProductNumber(code)}
The size: ${getSized(code)}`)



