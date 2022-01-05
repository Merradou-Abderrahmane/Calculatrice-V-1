var aString;
var bString;
var calculator = new calculatorOop()

function onClickNumber(number) {

    if (calculator.a == undefined) {
        if (aString == undefined) {
            aString = ""
        }
        aString += number

    } else {
        if (bString == undefined) {
            bString = ""
        }
        bString += number
    }
    display()
}

function display(number) {
    var display = document.getElementById("display")
    display.value = ''

    if (calculator.a != undefined && calculator.b != undefined && calculator.operation != undefined) {
        display.value = number
    } else {
        if (aString != undefined) {
            display.value += aString
        }
        if (calculator.operation != undefined) {
            display.value += calculator.operation
        }
        if (bString != undefined) {
            display.value += bString
        }
    }

}


function onClickOperation(operationParm) {
    if (calculator.operation == undefined) {
        calculator.operation = operationParm
        calculator.a = parseFloat(aString)
    }

    display()
}

function equal() {
    calculator.a = parseFloat(aString);
    calculator.b = parseFloat(bString);

    calculator.calculate()

    display(calculator.calculate())

}


function resetValues() {
    calculator.init()
    aString = undefined;
    bString = undefined;
    let display = document.getElementById("display");

    display.value = "";
}