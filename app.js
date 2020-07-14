
///////////Initialize all variables ////////////////

// All numbers/operators
let calcNumBtns = document.querySelectorAll(".calc-num-btn");
let calcOperatorBtns = document.querySelectorAll(".calc-btn-operator");

// The number variables
let oneBtn = document.getElementById("calc-one");
let tw0Btn = document.getElementById("calc-two");
let threeBtn = document.getElementById("calc-three");
let fourBtn = document.getElementById("calc-four");
let fiveBtn = document.getElementById("calc-five");
let sixBtn = document.getElementById("calc-six");
let sevenBtn = document.getElementById("calc-seven");
let eightBtn = document.getElementById("calc-eight");
let nineBtn = document.getElementById("calc-nine");

// The operators variables
let plusBtn = document.getElementById("calc-plus");
let minusBtn = document.getElementById("calc-minus");
let multiplyBtn = document.getElementById("calc-multiply");
let divisionBtn = document.getElementById("calc-division");

// The other buttons
let equalsBtn = document.getElementById("calc-equals");
let clearBtn = document.getElementById("calc-clear");
let backspaceBtn = document.getElementById("calc-backspace");
let decimalBtn = document.getElementById("calc-decimal");

// Display screen
let displayVal = '0'; //default it will be 0, but when we click a number we will se number
let pendingVal; // When we add a number, the number on screen we show a number temporarty
let evalStringArray = []; // this array will hold the operations i press inn and than pass it to a eval functiomn
let displayValElement = document.getElementById("calc-display-val");


// Function that updateDisplay
const updateDisplayVal = (clickObj) => {
    const btnText = clickObj.target.innerText; // When i Click 8, than btnText will be 8
    
    if (displayVal === "0") //only add number if values is not zero
         displayVal='';
        
    displayVal += btnText;
    displayValElement.innerText = displayVal;
} 
// Function to perform operations
let performOperation = (clickObj) => {
    let operator = clickObj.target.innerText;

    switch (operator) {
        case "+":
            pendingVal = displayVal;
            displayVal = "0";
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push("+")
            break;
        case "-":
            pendingVal = displayVal;
            displayVal = "0";
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push("-")
            break;
        case "x":
            pendingVal = displayVal;
            displayVal = "0";
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push("*")
            break;
        case "÷":
            pendingVal = displayVal;
            displayVal = "0";
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push("/")
            break;
        case "=":
            evalStringArray.push(displayVal);
            let evaluation = eval(evalStringArray.join(' '));
            displayVal = evaluation + '';
            displayValElement.innerText = displayVal;
            evalStringArray = [];
            break;
        default:
            break;
    }
}


// Adding Eventlistners to numbers
for (let i = 0; i < calcNumBtns.length; i++ ) {
    calcNumBtns[i].addEventListener("click", updateDisplayVal, false);
}
// Adding Eventlistners to operator
for (i=0; i<calcOperatorBtns.length; i++) {
    calcOperatorBtns[i].addEventListener("click", performOperation, false);
}

//Clear Button
clearBtn.onclick = () => {
    displayVal = "0";
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal;
}

// Backspace button to clear when clicked on

backspaceBtn.onclick = () => {
    let lengthOfDisplayVal = displayVal.length;
   displayVal =  displayVal.slice(0, lengthOfDisplayVal - 1);

   if (displayVal==="") 
   displayVal = "0";

   displayValElement.innerText = displayVal;
}

// Decimalbutton
decimalBtn.onclick = () => {
    if(!displayVal.includes("."))
    displayVal += ".";
    displayValElement.innerText = displayVal;
}