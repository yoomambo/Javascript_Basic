// async & await
// clear style of using promise

// 1. async
// async를 function 앞에 쓰면 return 값은 Promise로 바뀐다.

function fetchUser() {
  // do network request in 10 secs....
  return new Promise((resolve, reject) => {
    resolve("ellie");
  });
}

async function newFetchUser() {
  // do network request in 10 secs....
  return "ellie";
}

// const user = fetchUser();
const user = newFetchUser();
user.then(console.log);
console.log(user);

// 2. await

function print() {
  console.log("Hello!!!!");
}

function delay(ms) {
  // ms만큼 시간이 지나고 print를 호출하는 Promise를 return
  return new Promise((resolve) => setTimeout(resolve, ms));
} // 그냥 resolve를 return하는 걸 보면, Promise를 return

// await은 delay가 끝날 때 까지, delay가 promise를 return할 때 까지 기다려줌
async function getApple() {
  await delay(2000);
  return "apple";
}

async function getBanana() {
  await delay(1000);
  return "banana";
}
// Promise 지옥
function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}
pickFruits().then(console.log);

// Promise 지옥 --> async await를 써서 해결
async function newPickFruits() {
  const apple = await getApple(); // 1초 뒤 getBanana 실행
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}
newPickFruits().then(console.log); // 2초만에 생성

async function nowPickFruits() {
  const applePromise = getApple(); // Promise를 만드는 순간 동시 생성
  const bananaPromise = getBanana(); // Promise를 만드는 순간 동시 생성
  const apple = await applePromise; // 서로 1초만 기다리고 바로 실행
  const banana = await bananaPromise; // 서로 1초만 기다리고 바로 실행
  return `${apple} + ${banana}`;
}
nowPickFruits().then(console.log); // 1초만에 생성

// try catch로 가능하다.
async function tryCatchPickFruits() {
  try {
    const apple = await getApple();
    const banana = await getBanana();
  } catch {}
  return `${apple} + ${banana}`;
}
tryCatchPickFruits().then(console.log);

// 3. Promise API

function pickAllFruits() {
  // Promise들을 다 받을 때까지 기다려서 모아서 배열로 return 해준다.
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

function pickAOnlyOne() {
  // Promise들을 제일 먼저 오는 것을 return 해준다.
  return Promise.race([getApple(), getBanana()]);
}
pickAOnlyOne().then(console.log);
