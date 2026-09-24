

function addition() {
     let firstNumber = document.getElementById("first-number").value;
     let secondNumber = document.getElementById("second-number").value;

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    let result = firstNumber + secondNumber;
    
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }

    document.getElementById("output").innerHTML = String(result);
}

function subtraction() {

     let firstNumber = document.getElementById("first-number").value;
     let secondNumber = document.getElementById("second-number").value;

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    let result = firstNumber - secondNumber;
    
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }   

    document.getElementById("output").innerHTML = String(result);
}

function multiplication(){
     let firstNumber = document.getElementById("first-number").value;
     let secondNumber = document.getElementById("second-number").value;

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    let result = firstNumber *= secondNumber;
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }

    document.getElementById("output").innerHTML = String(result);
}

function division(){
     let firstNumber = document.getElementById("first-number").value;
     let secondNumber = document.getElementById("second-number").value;

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    let result = firstNumber /= secondNumber;
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }

    document.getElementById("output").innerHTML = String(result);
}

function powerOf() {
     let firstNumber = document.getElementById("first-number").value;
     let secondNumber = document.getElementById("second-number").value;

     let result = 1;

     for (let i = 0; i < secondNumber; i = i + 1) {
        result = result * firstNumber;
     }

    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }

    document.getElementById("output").innerHTML = String(result);
}

function clearCalc(){
   document.getElementById("first-number").value = "";
   document.getElementById("second-number").value = "";
   document.getElementById("output").innerHTML = "";
}