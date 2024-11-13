const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// 입력 필드에서 입력값 가져옴
function getUserNumberInput(){
    return parseInt(userInput.value)
}

//계산 로그 생성과 작성
function createAndWriteOutPut(operater, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operater} ${calcNumber}`
    outputResult(currentResult, calcDescription) //벤더 파일에서 옴

}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult){
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };

    logEntries.push(logEntry);
    console.log(logEntry.operation);
    console.log(logEntries);
}

function calculateResult(calculationType){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOpereator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;  
        mathOpereator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;  
        mathOpereator = '-';
    } else if(calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;  
        mathOpereator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;  
        mathOpereator = '/';
    }
    createAndWriteOutPut(mathOpereator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);

}

function add(){
    calculateResult('ADD');
}

function subtract(){
    calculateResult('SUBTRACT');
}

function multiply(){
    calculateResult('MULTIPLY');
}

function divide(){
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
