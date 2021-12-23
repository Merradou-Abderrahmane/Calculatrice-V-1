// declaring variabels
var a;
var aString;
var b;
var bString;
var operation;
var total;

function onClickNumber (number){
    if ( a == undefined) {
        if (aString == undefined) {
            aString = "";
        }
       
        aString += number 
    }
    else {
        if(bString == undefined){
            bString = "";
        }
        bString += number;
    }
    display();

}

function display(number){
    var display = document.getElementById("display");
    display.value = ''
  if( a != undefined && b != undefined && operation != undefined){
      display.value = number
  }

  else {
    if ( aString != undefined){
     display.value += aString
    }
    if ( operation != undefined)
    display.value += operation
  }
  if( bString != undefined){
      display.value += bString
  }
  
}

function onClickOperation (operationPara){
       if(operation == undefined){
           operation = operationPara;
           a = parseFloat(aString);
       }
      
       display();
}

function equal (){
    a = parseFloat(aString);
    b = parseFloat(bString);

    total = calculate(a, b, operation)
   
    display(total)
}

function calculate(aPara, bPara,operationPara){
var _total = undefined
switch(operationPara){
    case"+":
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