// declaring variabels
var a;
var aString;
var b;
var bString;
var operation;
var total;

function onClickNumber(number) {
    if (a == undefined){
        if (aString == undefined) {
          aString = '';
        }
     aString += number
    }


    dispaly();
}

function dispaly(number){
    var dispaly = document.getElementById("display");
    dispaly.value = '';
    if (a!= undefined && b!= undefined && operation != undefined){
  dispaly.value = number;
    }
    else 
   if (aString != undefined) {
      dispaly.value += aString
    }
   if (operation != undefined){
       dispaly.value += operation
   }

}

function onClickOperation (operationPara){
    a = parseFloat(aString)
   if (operation == undefined) {
       operation = operationPara
   }
 dispaly();

}