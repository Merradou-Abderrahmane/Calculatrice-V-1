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
    
    if (aString != undefined) {
      dispaly.value += aString
    }
}
