const add = (num1: number, num2: number) => {
  return num1 + num2;
}

// this example works!
console.log(add(1, 2));

// this does not work because 2 is not a number, its a string
console.log(add(1, '2'));

