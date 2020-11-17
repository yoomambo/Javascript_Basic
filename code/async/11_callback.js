'use strict'

// Javascript is synchronous
// Execute the code block in order after hoisting

function printImmediately(print) {
    print();
}
printImmediately( () => console.log('Hello'));


function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

// callback function

// synchronous
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Asynchronous callback
printWithDelay( () => console.log("async callback"), 2000);


// callback 지옥행

class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout( () => {

            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            }
            else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {

        setTimeout(() => {
            if( user === 'ellie') {
                onSuccess({name : 'ellie', role : 'admin'});
            }
            else{
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

// 1. id, password를 입력받게
// 2. login
// 3. id를 확인해서 role을 받아온다.
// 4. 출력

const userStorage = new UserStorage();

const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
    id, 
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);
