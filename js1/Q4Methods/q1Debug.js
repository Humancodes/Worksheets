// Problem
// const obj = {
//     name: "JavaScript",
//     getName: () => this.name,
// };

// SOLUTION
// Removed arrow function and used anonymous function
const obj = {
  name: "JavaScript",
  getName: function () {
    return this.name;
  },
};
console.log(obj.getName());
//  Output: "JavaScript"
