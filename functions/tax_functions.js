"use strict"

function getSocSecTax(grosspay){
   const taxeRate = (6.2/100);
   const socialTax = grosspay * taxeRate;
   return socialTax;
}
console.log("Social Security Tax is " + getSocSecTax(1000));

function getMedicareTax(grosspay){
    const taxeRate = (1.45/100);
    const medicareTax = grosspay * taxeRate;  

    return medicareTax;
}
console.log("Medical Care Tax is " + getMedicareTax(1000));

function getFederalTax(grosspay,withholdingCode){
    
    let taxRate = 0;

    
    if (withholdingCode ===  0){
        taxRate =23/100;
        
    }
     else if(withholdingCode === 1){
        taxRate = 21/100;
         
    }
    else if(withholdingCode === 2){
        taxRate = 19.5/100;
    
    } else if(withholdingCode === 3){
        taxRate = 18.5/100;
       
    }
    else if (withholdingCode >= 4){
        taxRate = .18-((withholdingCode-4)*.005);
       
    }

    const federalTax = (grosspay * taxRate)/100;
    
    console.log(`gross pay$${grosspay} withholding code${withholdingCode} the ${taxRate} tax return`);
    return federalTax;
    
    
}
getFederalTax();