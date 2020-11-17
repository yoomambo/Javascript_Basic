'use strict';
// Objects
// 자바스크립트의 data type 중 하나
// data와 function의 집합
// 객체는 모든 인스턴스를 대표하는 포괄적인 의미를 갖는다.
// 클래스의 타입으로 선언되었을 때 ‘객체’라고 부른다.
// Object = {key : value}의 집합체

// 1. Literals and Properties
// Object를 쓰기 전
const fullname = 'ellie';
const age = 4;
function print(name, age) {
    console.log(name);
    console.log(age);
}
print(fullname, age);
// Object를 쓴 후
// function이 object를 입력받고 object의 속성을 사용
const ellie = {name : 'ellie', age : 4};

function print_another(person) {
    console.log(person.name);
    console.log(person.age);
}
print_another(ellie);

// Object 생성
const obj1 = {}; // object literal syntax : class를 안만들어도 바로 생성 가능
const obj2 = new Object(); // object constructor syntax
//  미친짓 1 : object를 이미 생성하고 추가도 가능하긴함.
ellie.hasJob = true;
//  미친짓 2 : object를 이미 생성하고 추가도 가능하긴함.
delete ellie.hasJob

// 2. Compute Properties
// object는 .property 를 써줘서 접근가능
// object는 [property] 를 써줘서 array 처럼 접근가능
// key는 string type으로 해야한다.
// key를 써서 method나 data를 추가 가능하다.
// 사실 닷을 쓰는게 제일 좋다.
console.log(ellie.name); // ellie
console.log(ellie['name']); // ellie
console.log(`what? ${ellie.hasJob}`) // undefined
ellie['hasJob'] = true;
console.log(ellie.hasJob) // true

// function에서 obj를 받아서 속성값을 다루고 싶을 때!
function printValue(obj, key) {
    // 이렇게 하면 값을 못 받아온다. 그냥 obj 자체에 key가 있냐를 물어보니 undefined
    // console.log(obj.key) // undefined
    console.log(obj[key])
}
printValue(ellie, 'name') // ellie
printValue(ellie, 'age') // 4

// 3. Property value shorthand
// object를 생성하는게 일일히 귀찮을 때 Property value shorthand를 사용
const person1 = {name:'bob', age:2}
const person2 = {name:'harry', age:3}
const person3 = {name:'paul', age:4}
// person4를 만드는 데 또 object를 죽 쓰기 넘 귀찮다.
const person4 = makePerson('yoo', 100);
const person5 = new Person('yoo', 100);
console.log(person4)
// javascript에 class가 없을 때는 이렇게 만들었다.
function makePerson(name, age) {
    return{
        name,
        age,
    };
}

// 4. Constructor Function
// class와 유사하지만, constructor를 만들어서 바로 return
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. Operator : property existence check (key in obj)
// obj 안에 속성값, key가 있는지 확인한다.
console.log('name' in ellie) // true
console.log('age' in ellie) // true
console.log('random' in ellie) // false
console.log(ellie.random) // undefined

// 6. for..in vs for..of
// for (key in obj)
// obj의 key를 가져온다.
// console.clear();
console.log(ellie);

for (let key in ellie){
    console.log(`key : ${key}`)
}
// for (value of iterable)
// iterable한 친구들의 데이터를 가져올 떄
const array = [1,2,3,4,5];
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}
for (let key of array){
    console.log(key);
}

// 7. fun cloning
// Object.assign(dest, [obj1, obj2, obj3])
// user2는 user가 가르키는 object의 정보가 담겨있는 주소를 담아둔다.
// 따라서 user2.name을 변경해도 user의 data도 변경된다.
const user = {name: 'ellie', age:'20'};
// const user2 = user;
// user2.name = 'coder'; // 를 진행하면
console.log(user); // {name: 'coder', age:'20'};

// old way
// 이를 막기위해 빈 obj를 만들고, for문을 돌려서 manual적으로 할당해준다.
const user3 = {};
for (let key in user){
    user3[key] = user[key];
}
console.log(user3)
console.log(user); // {name: 'ellie', age:'20'};

// new way
const user4 = {};
Object.assign(user4, user);
user4.name = 'different';
console.log(user4); // {name: 'different', age:'20'};
// or
const user5 = Object.assign({}, user);
console.log(user5) // {name: 'ellie', age:'20'};

// Another Example
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue', size:'big'};
// fruit1, 2 를 거치면서 뒤에갈수록 계속 앞에 덮어씌운다.
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue
console.log(mixed.size); // big

const fruit3 = {color : 'blue', size:'big'};
const fruit4 = {color : 'red'};
// fruit3, 4 를 거치면서 뒤에갈수록 계속 앞에 덮어씌운다.
const mixed_2 = Object.assign({}, fruit3, fruit4);
console.log(mixed_2.color); // red
console.log(mixed_2.size); // big