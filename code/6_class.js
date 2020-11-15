'use strict'
// Object-Oriented Programming
// class : template
// object : class 를 이용해서 data를 넣어서 만든 instance
// Javascript classes
// - introduced in ES6
// - prototype-based inheritance

// Class Declarations
class Person1{
    // constructor
    constructor(firstName, lastName, age){
        // fields
        this.name;
        this.age;
    }

    speak(){
        console.log(`${this.name} :hello!`);
    }
}

// 2. getter, setter
class Person2{
    // constructor
    constructor(firstName, lastName, age){
        // fields
        this.firstName;
        this.lastName;
        this.age;
    }
    // getter
    get firstName(){
        return this._firstName
    }
    // setter
    set firstName(value){
        this._firstName = value
    }
    // getter
    get lastName(){
        return this._lastName
    }
    // setter
    set lastName(value){
        this._lastName = value
    }
    // getter
    get age(){
        return this._age
    }
    // setter
    set age(value){
        this._age = value
    }
}

// 3. Fields (pubilc, private)
// constructor를 사용하지 않을 때
// 엄청 최신버젼이기에 알고만 있자.
class Experiment{
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment;
console.log(`value : ${experiment.publicField}`); // 2
console.log(`value : ${experiment.privateField}`); // undefined

// 4. static properties and methods
// static은 object에서 접근하지 못한다.
// class를 직접 호출해서 써야한다.
// object에 상관없이 공통적으로 class 에서  쓸 수 있다면? -> 메모리 사용을 줄일 수 있다.
class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(`article number : ${article1.articleNumber}`); // 1
console.log(`article number : ${Article.articleNumber}`); // undefined

// 5. Inheritance
// 부모 클래스에서 자식 클래스로 뻗어나가는 작업
// 반복되는 작업을 줄일 수 있다.
// 디버깅이나 수정할 때, 한 번만 수정하면 끝난다.
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return this.width*this.height;
    }
}
class Rectangle extends Shape{}
// 우리가 필요한 함수만 재정의 할 수 있다. ->  overriding
// 부모 class의 method를 이어받아서 쓸거면 super를 이용
class Traingle extends Shape{
    draw(){
        super.draw()
        console.log('triangle')
    }
    getArea(){
        return this.width*this.height/2;
    }
    // 이 부분을 toString을 새롭게 재 정의할 수 있다.
    toString(){
        return `this color is ${this.color} One!!`;
    }
}

const rectangle = new Rectangle(20,20,'red');
rectangle.draw() // drawing red color of 
console.log(rectangle.getArea()) // 400
const triangle = new Traingle(20,20,'red');
triangle.draw() // drawinig red color of / triangle
console.log(triangle.getArea()) // 200

// 6. Class checking : instanceof
// 부모 클래스
// 자바스크립트의 모든 class 는 Object를 상속받은 것
console.log(rectangle instanceof Rectangle) // true
console.log(triangle instanceof Rectangle) // false
console.log(triangle instanceof Traingle) // true
console.log(triangle instanceof Shape) // true
console.log(triangle instanceof Object) // true
// 이 부분을 toString을 새롭게 재 정의할 수 있다.
console.log(triangle.toString()) //[object Object] --> this color is red One!!


