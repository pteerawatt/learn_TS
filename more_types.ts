// union type

// this will not work because there is a posibility to add a boolean to a number

// const combine = (input1: number | string | boolean, input2: number | string | boolean) => {
//   const result = input1 + input2;
//   return result;
// }

// we have to add all the options and handle them with if statements
const combine = (input1: number | string | boolean, input2: number | string | boolean) => {
  let result: number | string | boolean;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString()
  }
  return result;
} 

const combineAges = combine(30, true);
console.log(combineAges)

//////////////////////////////////////////////////////////////

// literal type
// You can restrict the input to be something specific

const bark = (dogSize: 's'| 'm'| 'l') => {
  if (dogSize === 's') console.log('yip');
  else if (dogSize === 'm') console.log('bark');
  else if (dogSize === 'l') console.log('BARK!');
}

// bark(1) // does not work. 1 is not one of the type
bark('m');

//////////////////////////////////////////////////////////

// we can still give a default function parameter input
const test = (pushVal: number | string, arr: (number | string)[] = []) => {
  arr.push(pushVal);
  console.log(arr);
}
test('string');

/////////////////////////////////////////////////////////////

// alias type allow you to make your own custom type

type num_boolean_dog = number | boolean | 'dog';

let example: num_boolean_dog;
example = 'cat' // will not work
example = 1;
example = true;
example = 'dog' 

/////////////////////////////////////////////////////////////