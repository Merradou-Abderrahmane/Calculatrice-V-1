var aString;
var bString;
var operation;
var a;
var b;
var total;

function onClickNumber(number) {

    if(a == undefined){
        if (aString == undefined) {
            aString = ""    
        }
        aString += number

    }
    else {
        if(bString == undefined){
            bString = ""
        }
        bString += number
    }
    
    display()
}

function display() {
    var display = document.getElementById("display")
    display.value = ''

    if (a != undefined && b != undefined && operation != undefined) {
        display.value = total
    } else {
        if (aString != undefined) {
            display.value += aString
        } 
        if (operation != undefined) {
            display.value += operation
        }
        if (bString != undefined) {
            display.value += bString
        }
    }

}


function onClickOperation(operationParm) {
    if (operation == undefined) {
        operation = operationParm
        a = parseInt(aString)
    }

    display()
}

function equal() {
    a = parseInt(aString);
    b = parseInt(bString);

    total = calculate(a, b, operation)

    display(total)

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

    return _total
}

function initialize() {
    let display = document.getElementById("display");
    display.value = "";
}