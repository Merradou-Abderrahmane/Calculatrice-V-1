// Declaring variabels
let A;
let B;
let solution;
let operation;
let AString;
let BString;


// Job
function Calculate(A,B,operation){
    let solution = undefined;
    switch (operation) {
        case '+':
            solution = A + B;
            break;
        case '-':
            solution = A-B;
                break;
        default:
            break;
    }
    return solution;
}


// Presentation
function pressNumber(number){
    if(A == undefined){
        if(AString == undefined) AString = '';
        AString += number;
    } 
    else {
        if(BString == undefined) BString = '';
        BString += number;
    } 

    Afficher();
}

function Afficher(number){

    let display = document.getElementById("display");
    display.value = "";
    
    if(A != undefined && B != undefined && operation != undefined){

        display.value = number;
    }else{
        if(AString != undefined)
        display.value += AString 
        if(operation != undefined)
        display.value += operation     
        if(BString != undefined)
        display.value += BString 

        }
 
   
}


function Operation(operationParam){
    if(operation == undefined){
        operation = operationParam;
        A = parseFloat(AString);
        Afficher();
    }else{
        alert(" You have already chosen the operation  " + operation);
    }
}

function Equal(){
    A = parseFloat(AString);
    B = parseFloat(BString);
    solution = Calculate(A,B,operation);
    Afficher(solution);
}

function Initialize(){
    A = undefined;
    B = undefined;
    AString = undefined;
    BString = undefined;
    operation = undefined;
    let display = document.getElementById("display");
    
    display.value = "";
}