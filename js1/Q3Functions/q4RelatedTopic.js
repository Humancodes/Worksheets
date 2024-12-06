const funExpression = function () {
  return `this in expression ${this}`;
};
console.log(funExpression());
// Output
// this in expression [object global]
const funArrow = () => {
  return `this in arrow ${this}`;
};
console.log(funArrow());
//Output:
//this in arrow [object Object]
