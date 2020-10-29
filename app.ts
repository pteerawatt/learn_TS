// type unknow is for when we dont know what to expect. its like any but if we try to assing this variable to another variable with strict type we will get an error
let userInput: unknown;
let userName: string;

userInput = 5;
// we get an error because we cannot gaurentee userInput is going to be a string
userName = userInput;

// you need an extra type check
if (typeof userInput === 'string') {
  userName = userInput;
}

/////////////////////////////////////////////////

// never

// tis is like void but void returns undefine. never returns nothing at all. usually this is used for funtion that throws error because we would never get to return anything. throw will crash the code

const generateError = (message: string, code: number): never => {
  throw { errorMessage: message, errorCode: code };
}

generateError('An error occurred!', 500);