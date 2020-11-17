// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  // const apple_name = fruits.pop()
  // const banana_name = fruits.pop()
  // const orange_name = fruits.pop()
  // console.log(apple_name, banana_name, orange_name);

  // join : 배열의 요소들을 string으로 취합한다. 이 때 operator를 입력 가능.
  const result = fruits.join(', ');
  console.log(result); // 'apple, banana, orange'
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  // split : 규칙이 있는 string을 나눠서 배열로 return
  const result = fruits.split(', ')
  console.log(result); // ["🍎", "🥝", "🍌", "🍒"]
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.sort( function (a,b) {
    return -a+b;
  }));
  console.log(array) // [5,4,3,2,1]
  
  // reverse : 배열의 순서를 바꿔서 array로 return
  const array2 = [1, 2, 3, 4, 5];
  const result = array2.reverse();
  console.log(result); // [5,4,3,2,1]
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];

  // slice : 배열에서 원하는 부분만 return
  const result2 = array.slice(2,5);
  console.log(result2); // [3,4,5]
  console.log(array); // [1,2,3,4,5]

  // splice : 배열 자체를 수정하여 입력한 index 기준으로 그 부분을 제외한 나머지 array return
  const result = array.splice(0,2)
  console.log(result); // [3,4,5]
  console.log(array); // [1,2]
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  for (let person of students) {
    if (person['score'] == 90) {
      console.log(`90 score's student : ${person['name']}`);
    }
  }

  // students.find(function (student, index, obj) {
  //   console.log(student, index, obj);
  // })

  // ellie code
  // find : callback 함수가 돌면서, 해당 조건문을 만족하는 가장 첫 번째 요소를 가져온다.
  const result = students.find(function (student) {
    return student.score === 90;
  })
  console.log(result); // Student {name: "C", age: 30, enrolled: true, score: 90}
}

// Q6. make an array of enrolled students
{
  // ellie code
  // filter : callback 함수가 배열을 지나면서 조건문을 만족하면 가져온다.
  const result = students.filter( (student) => student.enrolled === true);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const array = [];
  for (let person of students) {
    array.push(person['score'])
  }
  console.log(`result : ${array}`) 
  console.log(array)
  
  // ellie code
  // map : 특정 함수를 거쳐서 변환하는 함수
  const result = students.map( (student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  for (let person of students) {
    if (person['score'] < 50) {
      console.log(true);
      break;
    }
  }
  // some : 배열 중에서 callback 함수가 true가 되는 부분이 있다면 true return
  const result = students.some( (student) => student.score < 50);
  console.log(result);
  // every : 배열에서 callback 함수가 모두 true가 된다면 true를 return
  const result2 = students.every( (student) => student.score >= 50);
  console.log(result2);
}

// Q9. compute students' average score
{
  // reduce : callback 함수는 배열 모든 수에서 return
  // prev, curr가 파라미터이고, curr는 다음 사이클의 prev로 이어지면서 accumulate
  const result = students.reduce( (prev,curr) => prev +curr.score, 0);
  console.log(result/(students.length));
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map( (student) => student.score)
    .filter( (score) => score >= 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
  .map( (student) => student.score)
  // sort : callback 함수의 return이 -면 앞에 값이 작다, +면 앞에 값이 크다.
  .sort( function (a,b) {
    return -a['score'] + b['score'];
  })
  .join(', ');

  console.log(result);
}


