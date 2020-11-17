
"use strict";

// Promise

// Javascript object for asynchronous operation.

// 1. Producer
// promise 안에 네트워크 통신을 하는 코드를 넣었다면,
// object가 생성되고 만들어지는 순간, 네트워크 통신이 진행한다.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work
  console.log("doing something...");
  // 2초 정도 뒤에, resolve로 value를 return
  setTimeout(() => {
    // resolve 라는 callback함수로 전달하면 된다.
    resolve("ellie");
    // rejected
    // reject(new Error('no network!'));
  }, 2000);
});

// 2. Consumer : then, catch, finally

// then : promise가 정상적으로 수행이되서 resolve가 return한다면?
// 그 값을 callback으로 받아올 수 있다.
// catch : promise가 error를 나타낼 경우, 그 error 메세지를 받아올 수 있다.
promise
  .then((value) => {
    console.log(value);
  })
  // chain ring
  // promise는 then이 끝나고 다시 promise를 호출할 수 있기 때문에 catch를 이어서 가능.
  .catch((error) => {
    console.log(error);
  })
  // finally는 성공, 실패 여부를 떠나서 실행한다.
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chain ring
// 비동기적인 애들을 묶어서 처리한다.

const fetchNumber = new Promise((resolve, rejected) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, rejected) => {
      setTimeout(() => resolve(num - 1), 2000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling

const getHen = () => {
  return new Promise((resolve, rejected) => {
    setTimeout(() => resolve("hen"), 1000);
  });
};
// const getEgg = (hen) =>
//   new Promise((resolve, rejected) => {
//     setTimeout(() => resolve(`${hen} -> egg`), 1000);
//   });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`Error! ${hen} -> egg`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} -> fry`), 1000);
  });

// getHen()
//   .then((hen) => getEgg(hen))
//   .then((egg) => cook(egg))
//   .then((result) => console.log(result));
// // callback 함수로 값을 받아올 때, 바로 다음 함수로 넘길거면 바로 함수이름만!
// getHen() //
//   .then(getEgg)
//   .then(cook)
//   .then(console.log);

getHen()
  .then(getEgg)
  .catch(console.log)
  .then(cook)
  .then(console.log);