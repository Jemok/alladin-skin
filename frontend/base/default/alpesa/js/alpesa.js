
function calculateActions(thisObject){
    //get the value
   var reedemPoints = (thisObject.value).trim();
   var displayerAmt = document.getElementById("actual-calculation");

    //get currency symbol
    var currencySymbol = document.getElementById("currency-holder").getAttribute("value");

   if(reedemPoints.length >0){

    //get the conversion figure
    var conversionFigure = document.getElementById("point-curr-converter").getAttribute("value");

    //perfom arithmetic
    if(reedemPoints > 0){
       $amount = reedemPoints * conversionFigure; 
    }else{
        $amount = 0;
    }
    

    //update the element showing the amount to be reedemed
    var totalAmount = currencySymbol+' '+$amount;
    displayerAmt.innerHTML = totalAmount;


   }

}