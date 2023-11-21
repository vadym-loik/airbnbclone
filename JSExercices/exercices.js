console.log('hello');

// SUM NUMBERS
const sumNumbers = (num1, num2) => {
  return num1 + num2;
};

console.log(sumNumbers(3, 4));

// ARRAY SUM NUMBERS

const addArray = (myArray) => {
  let accumulator = 0;
  for (let i = 0; i < myArray.length; i++) {
    accumulator = accumulator + myArray[i];
  }
  return accumulator;
};

const example = [2, 4, 6, 2];
console.log(addArray(example));

// SORT AN ARRAY
const higherValue = () => {
  let higherValue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > higherValue) {
      higherValue = arr[i];
    }
  }
  return higherValue;
};

const sortArray = (arr) => {
  let sortedArray = [];
  for (let i = 0; i < arr.length; i++) {}
};

// // sum array
// const arrOfNumbers = [1, 5, 10, 18, 22, 50];
// // const sumArr = arr.reduce((total, amount) => total + amount);
// // console.log(sumArr);
// function sumArr() {
//   let sum = 0;
//   for (let num of arrOfNumbers) {
//     sum += num;
//     console.log(sum);
//   }
// }
// sumArr();

// // sort arr
// const secondArrOfNumbers = [5, 1, 122, 33, 83, 13];
// function comparNumbers(num1, num2) {
//   return num1 - num2;
// }
// secondArrOfNumbers.sort(comparNumbers);
// console.log(secondArrOfNumbers);

// // fizzBuzz
// function fizzBuzz() {
//   for (let i = 1; i < 50; i++) {
//     if (i % 15 == 0) {
//       console.log('FizzBuzz');
//     } else if (i % 3 == 0) {
//       console.log('Fizz');
//     } else if (i % 5 == 0) {
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz();
