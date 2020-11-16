'use strict'
// JSON
// Javascript Object Notation

// 1. Object to JSON
// stringify

let json = JSON.stringify(true);

console.log(json); // json
console.log(typeof json); // string

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit={
    name : 'tori',
    color : 'white',
    size : null,
    birthdate : new Date(),
    // 함수나 symbol은 object의 data가 아니기에, json에 포함되지 않는다.
    // symbol : Symbol('id'),
    jump : () => {
        console.log(`${name} can jump`);
    },
};
console.log(typeof rabbit);

json = JSON.stringify(rabbit);
console.log(json); // {"name":"tori","color":"white","size":null,"birthdate":"2020-11-16T12:43:31.946Z"}
// 원하는 요소만 추출 가능하다.
json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json); // {"name":"tori","color":"white"}
// callback 함수를 넣으면 세밀하게 통제 가능하다.
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key : ${key}, value : ${value}`);
    // return value;
    return key === 'name' ? 'ellie' : value; 
});
console.log(json);

// 2. JSON to Object
// parse(json)

json = JSON.stringify(rabbit);
console.log(rabbit); // object
console.log(json); // string
console.log(typeof json);

const obj = JSON.parse(json);
console.log(obj);
// object를 string으로 변환하고 string에서 parse를 통해 object를 변환하면 그안에 함수는 없어진다.
// obj.jump(); // Error
// API도 마찬가지다.
rabbit.birthdate.getDate(); // 16
// obj.birthdate

// 이를 바꿔주려면, parse에서 reviver을 사용한다.
const obj2 = JSON.parse(json, (key, value) => {
    return key === 'birthdate' ? new Date(value) : value;
})
console.log(obj2.birthdate.getDate()) // 16