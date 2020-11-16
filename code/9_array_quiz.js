// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const apple_name = fruits.pop()
  const banana_name = fruits.pop()
  const orange_name = fruits.pop()
  console.log(apple_name, banana_name, orange_name);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  Array(fruits)
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];

  const new_array = {};
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
}

// Q6. make an array of enrolled students
{
  for (let person of students) {
    if (person['enrolled'] == true) {
      console.log(`enrolled student : ${person['name']}`);
    }
  }
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
}

// Q8. check if there is a student with the score lower than 50
{
  for (let person of students) {
    if (person['score'] < 50) {
      console.log(true);
      break;
    }
  }
}

// Q9. compute students' average score
{
  const array = [];

  for (let person of students) {
    array.push(person['score'])
  }
  getScore = (acc, cur, i) => acc+cur;
  const result = array.reduce(getScore, 0);
  console.log(result/(array.length));
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  console.log(students.sort( function (a,b) {
    return a['score'] - b['score'];
  }))
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  console.log(students.sort( function (a,b) {
    return -a['score'] + b['score'];
  }))
}