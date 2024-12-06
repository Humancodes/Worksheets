// Q Discuss how type coercion differs in equality checks (== vs. ===). Provide an example.

// 1. Loose Equality (==):
// The == operator in JavaScript performs type coercion,
// meaning it tries to convert the values being compared
// to the same type before making the comparison.
// It compares the value only not the type

// 2. Strict Equality (===):
// The === operator is more strict and does
// not perform type coercion. It compares both
// the value and the type of the operands

// EXAMPLE
a = "5";
b = 5;

console.log(a == b); // It will give true
console.log(a === b); // It gives false
