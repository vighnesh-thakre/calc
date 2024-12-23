let currentInput = ' ';
function appendNumber(number){
    currentInput += number;
    document.getElementById('ans').value = currentInput;
}
function appendOperator(operator){
    currentInput += ' ' + operator + ' ';
    document.getElementById('ans').value = currentInput;
}
function clearDisplay(number){
    currentInput = ' ';
    document.getElementById('ans').value = ' ';
}
function calculate(number){
    try{
    currentInput = eval(currentInput).toString();
    document.getElementById('ans').value = currentInput;
}
catch(error){
    document.getElementById('ans').value = error;

}
}
