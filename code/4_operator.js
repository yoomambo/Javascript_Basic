// 1. String Concatentation
console.log('my'+ 'cat');
console.log('2'+ 2);
console.log(`string literal : 1 + 2 : ${1+2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // subtract
console.log(1 / 1); // divide
console.log(1 * 2); // multiply
console.log(4 % 3); // remainder
console.log(2 ** 3); // exponential
// 몫을 구할 때는
let number = 6;
console.log(parseInt(number/4)); // 1

// 3. Increment and decrement operators
// increment
let in_counter = 2;
const preIncrement = ++in_counter;
console.log(preIncrement); // 3
const postIncrement = in_counter++;
console.log(postIncrement); // 3
console.log(in_counter); // 4
// decrement
let de_counter = 2;
const preDecrement = --de_counter;
console.log(preDecrement); // 1
const postDecrement = de_counter--;
console.log(postDecrement); // 1
console.log(de_counter); // 0

// 5. logical && (and), || (or), ! (not) 내가 알고있는 거랑 동일하다.
const value1 = true;
const value2 = 4<2; // false
// || (or)
    // 이 경우는 value1이 true이기 때문에 value2, check()를 실행하지 않는다. 이미 true라서
    // 만약 연산을 많이 하게되는 check 함수를 제일 앞에다 둔다면, 어차피 코드는 돌아가지만 wasting time 존재
console.log(`or: ${value1 || value2 || check()}`); // true
// && (and)
    // 만약 연산을 많이 하게되는 check 함수를 제일 앞에다 둔다면, 어차피 코드는 돌아가지만 wasting time 존재
console.log(`and: ${value1 && value2 && check()}`); // false
    // or, and을 쓸 경우, 연산이 많은 함수들을 제일 뒤에다 배치하는 것으로 한다.
// ! (not)
console.log(!value1); // false

function check() {
    for(let i=0; i<10; i++){
        // wasting time
        
        console.log('Fail!');
    }

    return true;
}
// if문을 써서, nullableObject && nullableObject.something
// if (nullableObject != null){
//     nullableObject.something;
// }

// 6. Equailty
// == : type conversion이 이루어진다. 내용만 같은 경우 true
// === : type conversion이 X. 내용과 type도 같은 경우 true
const stringFive = '5';
const intFive = 5;
console.log(stringFive == intFive); // true
console.log(stringFive === intFive); // false
// object equality by reference
const ellie1 = {name:'ellie'};
const ellie2 = {name:'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

// Quiz
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 7. conditional operators : if
// if, else if, else

const name = 'ellie';
if (name == 'ellie'){
    console.log(`Hello ${name}!`);
}
else if (name == "hyuk"){
    console.log(`Bye ${name}!`);
}
else{
    console.log(`Don't Do That! ${name}!`);
}

// 8. Ternary Operator: ?
// 문법 : condition ? value1 : value2;
console.log(name === 'ellie' ? 'Yes' : 'No')

// 9. Switch
// if else if 를 써도 되지만, if문은 가독성이 살짝 떨어진다.
// typescript 에서 나중에 type 검사할 때 주로 쓴다.
const browser = 'Safari';
switch (browser){
    case 'IE':
        console.log('Go Away!');
        break;
    // 출력이 같을 경우 이렇게 묶어도 된다.
    case 'Chrome':
    case 'FireFox':
        console.log('Go Away!');
        break;
    default:
        console.log('Same All!');
        break;
} // Same All!!

// 10. while looop
// while loop는 true에서 벗어나면 계속 동작
let i = 3;
while (i>0){
    console.log(i);
    i--;
}
// do while
// block을 만들어 먼저 실행하도록 한다.
do{
    console.log(`do while : ${i}`);
    i--;
} while(i>0);

// 11. for loop
for (i=3 ; i>0 ; i--){
    console.log(`value : ${i}`);
}
// inline으로 변수를 할당하고 지역변수로 사용하고 for문이 끝나고 없어진다.
for (let i=3 ; i>0 ; i = i-2){
    console.log(`value : ${i}`);
}
