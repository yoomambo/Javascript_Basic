# Promise

## KeyPoint

그 전에 특징을 이해하고 promise를 공부하자.

1. **status를 이해하자.**
   1. 기능을 수행 중인가? (pending)
   2. 기능이 완료되어서 성공했는지 실패했는지? (fulfilled or rejected)
2. **producer vs consumer**
   1. 제공하는 사람
   2. 쓰는 사람
3. Promise의 파라미터, _**resolve와 reject를 하나의 socket처럼 생각하자.**_

## 정의 

> 자바스크립트에서 제공하는 비동기를 간단하게 처리할 수 있도록 도와주는 object이다. 
> 
> 정해진 장시간의 기능을 수행하고 나서 정상적으로 기능이 수행되었다면, 성공했다는 return을 돌려주고, 만약 기능을 수행하다가 문제가 발생하면 Error를 전달한다.

내가 언제 User의 데이터를 받아올지는 모르겠지만 Promise라는 object를 가지고 있으면, 
여기에 너가 _**then이라는 callback 함수만 입력하면, user의 데이터가 준비되는 대로 불러올게.**_

## 왜 Promise 써야할까?

### 1. 비동기적 활동

네트워크를 사용하여 데이터를 주고 받을 때, 시간이 걸린다. 이걸 synchronous로 처리하면 데이터가 오갈때 까지, 다음 코드가 실행이 되지 않는다.

그래서 파일 읽어오는 것은 비동기적으로 처리하자.

_**이 때, Async 활동들을 Promise로 묶어주어, 동기적으로 처리하는 것 처럼 만들어준다.**_

### 2. 깔끔해지는 코드

promise를 쓰면 callback을 쓰지 않아도 깔끔하게 작성이 가능하다.

### 3. callback 지옥을 탈출

나중에 코드가 무거워지면서 callback으로만 짓게되면 디버깅할 때, 포인터처럼 타고 타고 넘어가야하기 때문에, 어디서 잘못됬는지 알기 힘들다.

## Promise Class

```javascript
    var Promise: PromiseConstructor
    new <any>(executor: (resolve: (value?: any) => void, reject: (reason?: any) => void) => void) => Promise<any>
```

- resolve : 기능을 정상적으로 수행할 때 어떻게 return?
- rejected : 기능이 끊길 때 어떻게 return?

## Promise 생성

- promise 안에 네트워크 통신을 하는 코드를 넣었다면, object가 생성되고 만들어지는 순간, 네트워크 통신이 진행한다.
- 만약 사용자가 action을 취할 때, 하고 싶으면 본문 안에 바로 promise를 생성하면 안된다. 불필요한 통신을 할 수 있다. --> _**class 안에 Promise를 생성하자**_
- promise가 만들어지면, 안에 executor가 바로 실행.
- executor 안에는 resolve와 rejected가 있어 판단한다.

## chain ring

> promise는 then이 끝나고 다시 promise를 호출할 수 있기 때문에 catch를 이어서 가능.

## Consumer : then, catch, finally

- then : promise가 정상적으로 수행이되서 resolve가 return한다면? 그 값을 callback으로 받아올 수 있다.
- catch : promise가 error를 나타낼 경우, 그 error 메세지를 받아올 수 있다.
- finally는 성공, 실패 여부를 떠나서 실행한다.
