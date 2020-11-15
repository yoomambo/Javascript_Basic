'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. index position
const fruits = ['apple', 'banana'];
console.log(fruits); // ['apple', 'banana']
console.log(fruits.length); // 2
console.log(`name : ${fruits[0]}`); // 'apple'
console.log(`name : ${fruits[1]}`); // 'banana'
console.log(`name : ${fruits[2]}`); // undefined
console.log(`name : ${fruits[fruits.length-1]}`); // 'banana'

// 3. Looping over an array
// a. for loop
for(let i=0; i<fruits.length;i++){
    console.log(fruits[i]);
}
// b. for of
for (let key of fruits){
    console.log(key);
}
// c. for each
// array를 입력하면, 입력받은 array를 callback function에 넣어 사용가능
fruits.forEach(function (value, index) {
    console.log(`index : ${index}, value : ${value}`);
})
// or
fruits.forEach((value, index) => console.log(`index : ${index}, value : ${value}`));

// 4. Addition, Deleltion, Copy

// a. push : add to end
fruits.push('orange', 'watermelon')
console.log(fruits); // [ 'apple', 'banana', 'orange', 'watermelon' ]
// b. pop : remove item the end, and return pop content
const result = fruits.pop();
console.log(fruits); // [ 'apple', 'banana', 'orange' ]
console.log(result); // 'watermelon'

// c. unshift : add beginning
fruits.unshift('lemon')
console.log(fruits); // [ 'lemon', 'apple', 'banana', 'orange' ]

// d. shift : remove beginning
fruits.shift();
console.log(fruits); // [ 'apple', 'banana', 'orange' ]

// note!!! shift, unshift : pop과 push보다 엄청 느리다.
// splice : remove by index position
console.log(fruits);
// (method) Array<string>.splice(start: number, deleteCount?: number): string[] (+1 overload)
// ?의 의미는 값을 지정해도, 지정 안해도 상관 없다는 의미.
// 값을 따로 지정 안해주면, 1부터 모두 지워버림.
// fruits.splice(1);
// console.log(fruits); // [ 'apple' ]
fruits.splice(1, 1);
console.log(fruits); // [ 'apple', 'orange' ]
// 시작점, 몇개를 지울건지 정해주고, 그 뒤에 데이터를 넣으면 그 사이에 삽입
fruits.splice(1, 0, 'tomato', 'Greek');
console.log(fruits); // [ 'apple', 'tomato', 'Greek', 'orange' ]

// conbine two arrays
const fruits2 = ['pear', 'gimbab'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // [ 'apple', 'tomato', 'Greek', 'orange', 'pear', 'gimbab' ]

// 5. searching
// find index
// indexOf
console.log(newFruits);
console.log(newFruits.indexOf('apple')); // 0
console.log(newFruits.indexOf('Greek')); // 2
console.log(newFruits.indexOf('pizza')); // -1
// includes
console.log(newFruits.includes('Greek')); // true
console.log(newFruits.includes('pizza')); // false
// lastIndexOf
console.log(newFruits);
newFruits.push('apple');
console.log(newFruits);
console.log(newFruits.indexOf('apple')); // 0
console.log(newFruits.lastIndexOf('apple')); // 6