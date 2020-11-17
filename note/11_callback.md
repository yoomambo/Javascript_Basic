# Callback

## Async

자바스크립트 엔진은 코드를 위에서부터 밑으로 내려가면서 본다.
setTimeout은 브라우저 API로 브라우저에게 명령을 보내고,
엔진은 기다리지 않고 console.log를 진행한다.

    이러한 방법을 비동기적인 Asynchronous라고 한다.

## Hoisting

    Hoisting : var, function 함수 선언들이 제일 위로 올라가는 현상. 

Hoisting 이 된 이후로부터 자바스크립트가 동작.

## Callback 이란?

    파라미터를 function으로 전달할 때, 이 파라미터 함수를 callback

나중에 다시 불러줘라고 해서 callback 함수이다.

callback 함수는 arrow function으로 많이 부른다.

```javascript
console.log('1');// Synchronous

setTimeout(() => console.log('2'), 1000); // Asynchronous

function printImmediately(print) {
    print();
}
printImmediately( () => console.log('Hello'));

function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

console.log('3'); // Synchronous

printWithDelay( () => console.log("async callback"), 2000); // Asynchronous
```
## Callback 순서

자바스크립트 엔진은 코드를 위에서부터 밑으로 내려가면서 본다.
setTimeout은 브라우저 API로 브라우저에게 명령을 보내고,
엔진은 기다리지 않고 console.log를 진행한다.

1. function들은 hoisting이 되어 제일 위로 선언
2. 1을 출력
3. 2는 비동기라서 브라우저에게 요청하고
4. 3을 출력
5. asynce callback은 비동기라 브라우저에게 요청하고
6. 요청된 사항들을 브라우저가 받아서 실행

## Callback 지옥행

    너무 callback만 쓰면 callback 지옥행이다.

1. 가독성이 굉장히 떨어진다. 타고타고 넘어가야하기 때문
2. 에러나 디버깅할 때, 어디서 에러가 발생하는지 발견하기 힘들다.
3. 체인이 길어지면 길어질 수록 힘들다.
4. 유지보수가 힘들다.

## Callback Reference

MDN ➡️ https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
WIKI Callback ➡️ https://en.wikipedia.org/wiki/Callback_(computer_programming
JavaScript.info ➡️ https://javascript.info/callbacks
JavaScript.info 한국어 ➡️ https://ko.javascript.info/callbacks