"use strict"

function displayMailingLabel(name,address,city,state,zip){
    console.log(name);
    console.log(address);
    console.log(`${city},${state} ${zip}`);

}



function addNumbers(num1,num2){
   const sum = num1 + num2;
   console.log(num1 + " + " + num2 + " = " + sum);

    
   
}


function displayReceipt(totalDue,amountPaid){
    const changeDue= amountPaid - totalDue ;
    
    if (amountPaid < totalDue) {
       console.log ("Amount paid is less than the total amount due");
    }
    else if(amountPaid > totalDue){
        console.log("Amount paid is more than the total amount due");
    }
    else{
        console.log(`Total Due: $${totalDue.toFixed(2)} Amount Paid: $${amountPaid.toFixed(2)} Change Due:$${Math.abs(changeDue).toFixed(2)}`);

    }

}

displayMailingLabel("kathy","10101 Abc Street","Lake State","TX", 23232);
displayMailingLabel("wow","1400 RoadMap","WoW Lake","TX",12345 );

addNumbers(5,10);
addNumbers(20,5);

displayReceipt(20,30);
displayReceipt(50,30);
displayReceipt(100,100);
