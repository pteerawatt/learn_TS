// const person = {
//   name: 'Pete',
//   age: 30
// }

// this works but ts only check if person is an object. generally we want to be more specific.
const notSpecificPerson: object = {
  name: 'Pete',
  age: 30
}

// this is specific. BUT its better to not assign a type here since we already have a value, TS will auto assign type based on the value we assign to the key.
const person: {
  name: string;
  age: number;
  hobbies: string[]
} = {
  name: 'Pete',
  age: 30,
  hobbies: ['Sports', 'Cooking']
}

// typescrip will tell us theres no nickname property
// console.log(person.nickname)

// the content in arr can be string or number
let arr: (string | number)[];
arr = [1];
// arr[1] = true // this will not work. we cant assign boolean to arr


///////////////////////////////////////////////////////////////


// setting tuple
let tuple: [string, number];
// tuple = [1, 'one'] // doesnt work
tuple = ['one', 1]

let triplet: [string, number, boolean];
// triplet = ['hello', true, 1]; // does not work
triplet = ['hello', 1, true];


///////////////////////////////////////////////////////////////


// enum

enum Role { ADMIN, READ_ONLY, AUTHOR };
// by default ADMIN = 0 , but you can change it by { ADMIN = 1, ...} but that will be the start so now READ_ONLY will be 100
let user: {
 name: string;
 role: number;
}

user = {
  name: 'Pete',
  role: Role.ADMIN
}

console.log(user.role) // -> 4