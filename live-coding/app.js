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
    
    if ( b == undefined) {
        if(bString == undefined){
            bString = "";
        }
        bString += number;
    }
    display();

}

function display(number){
    var display = document.getElementById("display");
    display.value = "" ;
  if( a != undefined && b != undefined && operation != undefined){
      display.value = number;
  }

  else {
    if ( aString != undefined){
     display.value = aString;
    }
    if ( operation != undefined)
    display.value = operation;
  }
  
  

}

function onClickOperation (operationPara){
    a = parseInt(aString);
       if(operation == undefined){
           operation = operationPara;
       }
       display();
}