console.log('hello world!')

const add = (n1: number, n2: number, showResult: boolean, phase: string) => {
  const result = n1 + n2;
  if (showResult) {
    console.log(phase + result);
  } else {
    return n1 + n2;
  }
}

// below will not work
// let aNum: number;
// aNum = '5';


// line below will not work
// const num1 = '5';
const num1 = 5;
const num2 = 2.8;
const printResult = true;
const resultPharse = 'Result us: '
add(num1, num2, printResult, resultPharse)
