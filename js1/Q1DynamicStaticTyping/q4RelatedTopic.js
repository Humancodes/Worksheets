// Dynamic typing in JavaScript means that variables do not have a fixed type, and their type can change at runtime

let a = "10"; // a is a string
let b = 5; // b is a number

// Dynamic typing:
a = 20; // it is a number here

// Type coercion means to the automatic or implicit conversion of one data type to another in JavaScript.

// Type coercion here even 'a' is number it converts it to a string
// and we get output 205 instead of 25
let sum = a + b;
console.log(sum);
