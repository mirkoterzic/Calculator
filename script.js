function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

function calculator(){
    let firstNumber;
    let secondNumber;
    let operator;

    function operate(firstNumber,secondNumber,operator){
        switch(operator){
            case("+"): return add(firstNumber,secondNumber)
            case("-"): return subtract(firstNumber,secondNumber)
            case("*"):
            let result= multiply(firstNumber,secondNumber)
            if(result%1===0){
                return  multiply(firstNumber,secondNumber)
            }
            case("+"): return add(firstNumber,secondNumber)
        }

    }

    let displayValue=[];
    let digits= document.querySelectorAll('.digit')
    let dispay=document.querySelector('.display')
    digits.forEach(function (digit) {
        digit.addEventListener('click', function() {
            displayValue.push(digit.textContent);
            display.textContent = displayValue.join("");
        });
    });
}

calculator();