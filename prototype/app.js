// Declaring variabels
let a;
let b;
let solution;
let operation;
let aString;
let bString;


// Métier
function calculation(a,b,operation){
    let _solution = undefined;
    switch (operation) {
        case '+': 
            _solution = a + b;
            break;
        case '-':
            _solution = a-b;
                break;
        default:
            break;
    }
    return _solution;
}


// Présentation
function ClickNumber(number){
    if(a == undefined){
        if(aString == undefined) aString = '';
        aString += number;
    } 
    else {
        if(bString == undefined) bString = '';
        bString += number;
    } 

    Afficher();
}

function Afficher(number){

    let afficheur = document.getElementById("afficheur");
    afficheur.value = "";
    
    if(a != undefined && b != undefined && operation != undefined){

        afficheur.value = number;
    }else{
        if(aString != undefined)
        afficheur.value += aString 
        if(operation != undefined)
            afficheur.value += operation     
        if(bString != undefined)
            afficheur.value += bString 

        }
 
   
}


function Operation(operationParam){
    if(operation == undefined){
        operation = operationParam;
        a = parseFloat(aString);
        Afficher();
    }else{
        alert("Vous avez déjà choisi l'opération " + operation);
    }
}

function Egale(){
    a = parseFloat(aString);
    b = parseFloat(bString);
    solution = calculation(a,b,operation);
    Afficher(solution);
}

function Init(){
    a = undefined;
    b = undefined;
    aString = undefined;
    bString = undefined;
    operation = undefined;
    let afficheur = document.getElementById("afficheur");
    
    afficheur.value = "";
}