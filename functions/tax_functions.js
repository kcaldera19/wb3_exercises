"use strict"

function getSocSecTax(grosspay){
   const taxeRate = (6.2/100);
   const socialTax = grosspay * taxeRate;
   return socialTax;
}
console.log(getSocSecTax(1000));

function getMedicareTax(grosspay){
    const taxeRate = (1.45/100);
    const medicareTax = grosspay * taxeRate;  

    return medicareTax;
}
console.log(getMedicareTax(1000));

function getFederalTax(grosspay,withholdingCode){
    const federalTax = grosspay * withholdingCode;


    if (withholdingCode ===  23){
        console.log(`person1: gross pay$${grosspay} withholding code${0}`);
    }else if(withholdingCode === 21){
        console.log(`person2:  `)
    }
    
    
    return federalTax;
}
getFederalTax(750,23);