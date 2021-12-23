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
   else {
     if(b == undefined ) {
        if (bString == undefined ){
            bString = '';
        }
        bString += number 
     }
   }
    dispaly();
}

function dispaly(number){
    var dispaly = document.getElementById("display");
    dispaly.value = '';
    if (a!= undefined && b!= undefined && operation != undefined){
  dispaly.value = number;
    }
    else {
   if (aString != undefined) {
      dispaly.value += aString
    }
   if (operation != undefined){
       dispaly.value += operation
   }
   if (bString!= undefined){
   dispaly.value += bString
   }

}
}

function onClickOperation (operationPara){
    a = parseFloat(aString)
   if (operation == undefined) {
       operation = operationPara
   }
 dispaly();

}

function equal(){
    a = parseFloat(aString)
    b = parseFloat(bString)
   total = calculate (a, b, operation)
   dispaly(total)
}

function calculate(aPara, bPara, operationPara) {
    var _total = undefined

    switch (operationPara) {
        case "+":
            _total = aPara + bPara
            break;
        case "-":
            _total = aPara - bPara
            break;
        default:
            break;
    }

    return _total;
    }

function initialize (){
    dispaly = document.getElementById("display");
    dispaly.value = "";
}