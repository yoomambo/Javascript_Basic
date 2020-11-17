// Fun Quiz

// function calculate(command, a,b)
// command : add, subtract, divide, multiply, remainder

function printResult(cal_func) {
    const result = cal_func;
    console.log(result);
}

const returnCalculate = function calculate(command, a,b) {
    switch (command) {
        case 'add':
            return a+b;
            break;
        case 'subtract':
            return a-b;
            break;
        case 'multiply':
            return a*b;
            break;
        case 'divide':
            return a/b;
            break;
        case 'remainder':
            return a%b;
            break;
        default:
            return (`You input wrong command : ${command}, Please input another command`);
            break;
    }
}

let input_command = 'add'
// const result = returnCalculate(input_command, 1,2);
// printResult(result);
printResult(returnCalculate(input_command, 1,2));