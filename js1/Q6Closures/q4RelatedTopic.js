// IT provide encapsulation by limiting the access and value can't we directly updated

function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter());
