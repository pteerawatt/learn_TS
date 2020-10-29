// you can set the type of an out put of a function. Like variables, generally you dont want to set a type and just let TS set one for you.

// here is an example where we get an error because we are trying to set a return type to be string when it can only be number.
// const add = (n1: number, n2: number): string => {
//   return n1 + n2;
// }

// this is correct
const add = (n1: number, n2: number): number => {
  return n1 + n2;
}

/////////////////////////////////////////////////////

// void return type is when nothing is return. again you dont have to specify this.
const printResult = (num: number): void => {
  console.log('Result: ' + num)
}

//////////////////////////////////////////////////////

// function type

// we can set a variable's type to be a function
let combineValues: Function;

// when we try to assign a number we get an error
combineValues = 5;
combineValues = add;

console.log(combineValues(8, 8))

// specific funtion type

// we can set the function type to be a specific funtion.
// in this case comebineValue2 can be anyfunction that takes 2 number arguments and return a number
let combineValues2: (a: number, b: number) => number;

// print only takes one number and does not return anything so we get an error
combineValues2 = printResult;
combineValues2 = add;

// in a callback situation

const handleAdd = (num1: number, num2: number, cb: (a: number, b: number) => number) => {
  return cb(num1, num2)
}

console.log(handleAdd(1, 2, add))