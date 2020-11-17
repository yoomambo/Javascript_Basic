// 1. whole-script strict mode syntax
// javascript is very flexible
// flexible == dangerous
// ECMA에서 정의한 문법대로 하도록 사용자에게 에러메세지를 출력
'use strict';

// 2. variable, rw(read and write), 메모리에 읽기 쓰기가 가능하다.
// 변경될 수 있는 값
// let (added in ES6)
// 1. 변수 선언은 var이 아닌, let을 쓴다. (ES6 이후로 부터)
//    1. var을 쓰게되면 var hoising : 어디에 선언했냐 상관없이 선언을 끌어올려주는 역할을 한다.
// 2. block scope을 사용해서 변수들이 global하게 사용하는 것을 막아준다.
// 3. global한 변수를 만들려면, block없이 만들면 된다.

let globalname = 'global name';

{
let name = 'hyuk jun';
console.log(name);
name = "Hello";
console.log(name);
console.log(globalname);
}

// 3. Constants, only Read, 메모리에 읽기만 가능하다.
// 왠만하면 바뀌지 말아야할 데이터타입을 설정할 때 주로 쓴다.
// 왠만하면 Const 를 쓰자!
//  - 보안 : 해커들이 코드를 이상하게 삽입해서 값을 변경하는 것을 방지.
//  - 쓰레드 안정성 : 어플리케이션이 동작하면 프로레스 안에 빠르게 동작하도록 
//    여러 쓰레드가 동작하는데 동시에 변수에 접근하기 떄문에 변경될 우려가 있다.
//  - 인간의 실수를 줄이기 위해 : 자기도 모르는 새에 변수가 바뀌는 것을 방지.

const daysInWeek = 7;
const MaxNumber = 5;

// 4. Variable Type
    // 1. primitive : number, string, boolean, null, undefined, symbol
    // 2. object 
        // immutable type : 값을 변경하지 못하는 것을 의미한다.
        // let = 'hyuk' 을 하고 'hyok' 이라고 변경하지 못하고 값을 아예 통째로 바꾼다는 것을 의미한다.
        // Mutable Type : 값을 변경할 수 있다.
        // 자바스크립트는 모든 object는 Mutable type 이다.
        // const object = {name : 'hyuk', value : 1}; 이라고 한다면, object.name = 'yoo'로 하면 변경이 가능하다.

    // function : 함수를 파라미터로 넣을 수 있고, 함수를 return 할 수 있다.

// number : 알아서 float인지 int인지 계산한다.
// 자바스크립트에서는 number 하나로 통용된다. 마치 파이썬과 동일하다.
const count = 17;
const size = 17.1;
console.log(`count : ${count}, type : ${typeof count}`);
console.log(`count : ${size}, type : ${typeof size}`);
// infinity, -infinity, NaN
const infinity = 1/0;
const negativeinfinity = -1/0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeinfinity);
console.log(nAn); // NaN (숫자가 아닌 것을 연산한 경우 출력된다)

// string
// 1. +를 사용해서 연산 가능
// 2. format을 만들어서 변수 지정 가능
// 3. 숫자와 string을 더하면 무조건 string으로 변환된다.
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type : ${typeof greeting}`);
console.log(typeof greeting);
// format을 짜서 변수 지정 가능
const helloBob = `hi ${brendan}!`;
console.log(`value : ${helloBob}, type${typeof helloBob}`);

// boolean
// false : 0, null, undefined, NaN
// true : any other value
const canRead = true;
const test = 3<1;
console.log(`value: ${canRead}, type : ${typeof canRead}`);
console.log(`value: ${test}, type : ${typeof test}`);
// 논리연산자, &&, ||, ! 내가 알고있는 거랑 동일하다.
console.log(typeof canRead && test);

// null
// 변수에 빈칸을 할당한 것.
let nothing = null;
console.log(`value: ${nothing}, type : ${typeof nothing}`);

// undefined
// 변수에 어떠한 값도, 빈 칸도 부여하지 않음.
let x;
console.log(`value: ${x}, type : ${typeof x}`);

// symbol
// - object를 위한 특별한 식별자를 생성하는 역할
//   1. Map이나 자료구조에서 고유한 식별자가 필요하거나
//   2. 동시 다발적으로 코드에서 우선순위를 주고 싶을 때
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
// 같은 string을 작성했어도 다른 symbol로 만들어지기 떄문에, 고유한 식별자를 만들때 사용한다.
console.log(symbol1 === symbol2); // false
// 서로 같은 symbol을 만드려면, for을 써서 만든다.
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
// symbol을 출력하기 위해서는 description을 써야한다.
console.log(`value: ${symbol1.description}, typeof : ${typeof symbol1}`); // value : id


// 5. Dynamic Typing : dynamically typed language
// 씨나 자바언어는 스태틱 언어이다. 변수를 선언할 때 어떤 타입인지 설정을 해줘야한다.
// 자바스크립트는 프로그램이 동작할 때, 런타임에서 타입이 결정된다. 타입이 변경될 수 있다는 점이다.
let text = "hello";
console.log(text.charAt(0)); 
console.log(`value: ${text}, type : ${typeof text}`); // value: 1, type : number
text = '7' + 5;
console.log(`value: ${text}, type : ${typeof text}`); // value: 75, type : string
text = 5 + '7';
console.log(`value: ${text}, type : ${typeof text}`); // value: 57, type : string
// 숫자와 string을 더하면 무조건 string으로 변환된다.
// 위에서 text를 hello로 선언을 하여도 밑에 console.log에서 출력되는 값은 에러다.
console.log(text.charAt(0)); // error