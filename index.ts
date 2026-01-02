// Typescript Variable Types

let age: number = 30;
let firstName: string = "Mario";
let isFictional: boolean;

// Type checking in action
age = 32;
// age = "Sam";
firstName = "Luigi";
// isFictional = "false";
isFictional = true;

// Undefined and Null
// When we give a value a of NULL --> intentional
// When a variable is decalared --> undefined

let something: null;
let anotherThing: undefined;

// The above variables cannot take any other values in future.
something = null;
anotherThing = undefined;

// Decalarations locks the variable type. So you cannot assign anything else.
// Uncomment and see the error below
// something = 10;
// anotherThing = null;

let sample: number;
// console.log(sample);

// Union Types
// A variable can have values from two distinct types

let username: string | null | undefined;
// Here the variable can have values of type of either string, null or undefined
console.log(username);

// Assigning the variable a value of string
username = "lkasdfl";
console.log(username);

// Assigning the variable a value of null
username = null;
console.log(username);

// Assigning the username variable a value of Number
// username = 10;

// Optional Parameters and Properties
interface User {
  id: number;
  email?: string; // This is effectively string | undefined
}

const user1: User = {
  id: 10,
  email: "lkasdfl@gmail.com",
};

const user2: User = {
  id: 11,
};

console.log(user1.id, ":", user1.email);
console.log(user2.id, ":", user2.email);

// Optional parameters in functions
function greet(name?: string) {
  console.log(`Hello, ${name ?? "Guest"}`);
  // ?? is a fallback operator if the value on the left is null or undefined.
  // If the value to the left has a value and is not null or undefined it uses it
  // If its null or undefined then it fallsback on the "Guest"
  // Why not use || ?
  // || is a logical OR, where as ?? is safer,
  // E.g. You can use a null string, "" as a left operand that will work only with ??
}

greet("Alice");
greet();
// Lets try with some other values
greet(undefined);
//The below will error out
// greet(null);

// Optional Chaining
const user1_email = user1?.email;
const user2_email = user2?.email;
console.log(user1_email);
console.log(user2_email);

if (user2_email === undefined) {
  console.log(`The name was never provided`);
} else {
  console.log(user2_email.toUpperCase());
}

function printUserEmail(user_email?: string) {
  console.log(`User's email: ${user_email ?? "The email was not provided"}`);
}

printUserEmail(user1.email);
printUserEmail(user2.email);
