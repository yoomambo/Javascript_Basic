// function
//  - 프로그램에서 기본적인 블럭형태
//  - 서브프로그램으로써 여러번 동작이 가능하다. 모듈화
//  - 일을 수행하거나 value를 계산한다.

// 1. function declaration
// Rule
// - 하나의 함수는 하나의 일만 하도록 한다.
// - naming : doSomething, commnad 형태로 verb 형태로 정한다.
// - 함수 안에 두 가지 이상의 동작이 있다면, 이를 세분화해서 함수를 define 하자.
// - e.g. createCardAndPoint -> createCard, createPoint
// function은 자바스크립트에서 object 이다. 따라서 함수가 변수로 할당이 되고, 파라미터로 넘겨지고, 험수를 return할 수 있다.

function printHello() {
    console.log("Hello World!");
}

function log(message) {
    console.log(message);    
}
log('Hello');
log(1);
// 위의 경우, message가 string 인지, int인지 우리는 모른다.
// Typescript에서는 parameter 뒤에 type을 적어주고, return 뒤에 type 도 적어준다.
// 자바스크립트의 단점!!

// function log(message : string): number {
//     console.log(message);    
//     return 0;
// }

// 2. parameters
// primitive : value 주소를 가르킨다.
// object : reference의 주소를 가르킨다.
// 함수를 만들어서 object의 변수를 바꾼다면, primitive의 안에 value의 주소를 변경.
// object를 출력해도 바뀐 값이 보인다.
function changeName(obj) {
    obj.name= obj.name + ' coder';
}

const people = {name : 'ellie', age : 23};
console.log(people.name) // ellie
changeName(people);
console.log(people.name) // ellie coder

// 3. Default Parameters (added in ES6)
function showMessage(message, from="KIST") {
    console.log(`message from ${from}`);
}
showMessage('Hello')

// 4. Rest Parameters (added in ES6)
// ...args 를 적어주면 배열의 형태로 전달이 된다.
function printAll(...args) {
    for (let i=0; i<args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }
}
printAll('dream', 'coding', 'ellie');

// 5. Local Scape
// 밖에서는 안에 볼 수 없고, 안에서는 밖에 볼 수 있다.
let globalMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage);
}
printMessage() // hello -> global -> Error!!! (printAnother 안에 있는 childMessage 접근 불가)

// 6. Return
function sum(a, b) {
    return a + b;
}

// 7. Early Return, Early Exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic
    }
}
// Good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic
}

// First-class function

// 1. Function Expression
// function을 바로 변수에 선언이 가능하다.
const print = function () { // anonymous function
    console.log("print");
}
const print1 = function name() { // named function
    console.log("print");
} 
print()
// function을 다른 변수에 재할당해서 사용가능.
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Function Expression을 써서 CallBack function 
function randomQuiz(answer, printYes, printNo) {
    if (answer == 'love you') {
        printYes();
    }
    else{
        printNo();
    }
}
// anonymous function
const printYes = function (){
    console.log('yes!');
}
// named function
// 1. 나중에 디버깅할 때 함수의 이름이 보여서 자주 쓴다.
// 2. 함수안에서 recursion 할 때
const printNo = function print() {
    console.log('no!')
    // print()
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);
// arrow function
// 변수 이름 / (params) / return  할 value
const simplePrint = () => console.log('simplePrint');
const add = (a,b) => a+b;
const Multiply = (a, b) => {
    return a*b;
}
// IIFE : Immeadiately Invoked Function Expression
// 함수를 선언함과 동시에 출력하기를 바란다.
(function hello() {
    console.log('IIFE');
})();