'use strict'

// Javascript is synchronous
// Execute the code block in order after hoisting
// hoisting : var, function 함수 선언들이 제일 위로 올라가는 현상
// hoisting 이 된 이후로부터 자바스크립트가 동작.

console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// 자바스크립트 엔진은 코드를 위에서부터 밑으로 내려가면서 본다.
// setTimeout은 브라우저 API로 브라우저에게 명령을 보내고,
// 엔진은 기다리지 않고 console.log를 진행한다.

// callback function
