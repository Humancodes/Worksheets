# 1. Promises and Callback
## 1. Debug 
### Fixed the code
function fetchUser(callback) {
  setTimeout(() => {
    const user = { name: "Vivek", batch: "ft37" }; //Added valid obj
    callback(user.name); 
  }, 1000);
}

fetchUser((name) => console.log(name));

## 2. Explaination Video Link
[text](https://drive.google.com/file/d/1wmz-HbZgy5xfBn9K_eYBJHAjaOWRS8fQ/view?usp=sharing)


## 3. Output based
async function getData() {
  try {
    const api1Data = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    ).then((response) => response.json());
    console.log("API 1 data:", api1Data);

    const api2Data = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    ).then((response) => response.json());
    console.log("API 2 data:", api2Data);

    const combinedData = { ...api1Data, ...api2Data };
    console.log("Combined result:", combinedData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getData();


## 4. Related topic Question
### This is how can we use async/await with Promises to simplify asynchronous code
async function fetchData() {
  try {
    let val = await new Promise((resolve) => {
      setTimeout(() => {
        resolve("Sample Data");
      }, 1000);
    });
    console.log("Recieved data:", val);
  } catch (error) {
    console.log("Error in fetching data");
  }
}

fetchData();



# 2. Map, Filter, Reduce & Method Chaining
## 1. Debug 
### Fixed the code
const nums = [10, 20, 30];

const result = nums
  .map((n) => {
    return n / 2;    //instead zero divide with non zero number
  })
  .filter((n) => n > 0);

const sum = result.reduce((acc, curr) => acc + curr, 0); 
//find the sum like this proper reduce syntax

console.log(sum);

## 2. Explaination Video Link
[text](https://drive.google.com/file/d/1wmz-HbZgy5xfBn9K_eYBJHAjaOWRS8fQ/view?usp=sharing)



## 3. Output based
const nums = [1, 2, 3, 4, 5];

const nums = [1, 2, 3, 4, 5];

const result = nums
  .filter((n) => n % 2 == 0)
  .map((n) => n * 2)
  .reduce((acc, curr) => acc + curr, 0);

console.log(result); //output:12

## 4. Related topic Question
In reduce it return a single value that can be an obj , number , or arr

but forEach dosen't return any values


# 3. Frequency Creation in Objects Using Reduce
## 1. Debug 
### Fixed the code
const chars = "aabbc";
const freq = chars.split("").reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1; // added condition check
  return acc;
}, {});
console.log(freq);



## 2. Explaination Video Link
[text](https://drive.google.com/file/d/1wmz-HbZgy5xfBn9K_eYBJHAjaOWRS8fQ/view?usp=sharing)



## 3. Output based
function countOddEven(numbers) {
  return numbers.reduce((acc, num) => {
    if (num % 2 === 0) {
      acc.even += 1;  
    } else {
      acc.odd += 1;  
    }
    return acc;  
  }, { odd: 0, even: 0 }); 
}
const numbers = [1, 2, 3, 4, 5];
const count = countOddEven(numbers);
console.log(count);  

## 4. Related topic Question



# 4. Sort
## 1. Debug 
### Fixed the code
const nums = [1, 10, 2];
nums.sort((a,b)=>a-b); //(a,b)=>a-b added 
console.log(nums);

## 2. Explaination Video Link

[text](https://drive.google.com/file/d/1wmz-HbZgy5xfBn9K_eYBJHAjaOWRS8fQ/view?usp=sharing)


## 3. Output based
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];


people.sort((a, b) => b.age - a.age);

console.log(people);  
// Output: [ { name: "Bob", age: 30 }, { name: "Alice", age: 25 } ]


## 4. Related topic Question




# 5. this Keyword
## 1. Debug 
### Fixed the code
const obj = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, ${this.name}`); //used regular function
  },
};

obj.greet();

## 2. Explaination Video Link
[text](https://drive.google.com/file/d/1wmz-HbZgy5xfBn9K_eYBJHAjaOWRS8fQ/view?usp=sharing)



## 3. Output based
function Person(name) {
  this.name = name;  

  this.sayName = function() {
    console.log(`My name is ${this.name}`);
  };
}
const person = new Person("Alice");
person.sayName();  // Outputs: "My name is Alice"


## 4. Related topic Question
const person = {
    firstName: "Alice",
    lastName: "Doe",
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

const anotherPerson = {
    firstName: "Bob",
    lastName: "Smith"
};

// Using call
console.log(person.fullName.call(anotherPerson)); // "Bob Smith"

// Using apply
console.log(person.fullName.apply(anotherPerson)); // "Bob Smith"

// Using bind
const getFullName = person.fullName.bind(anotherPerson);
console.log(getFullName()); // "Bob Smith"







# 6. Call, Apply, and Bind
## 1. Debug 
### Fixed the code
const obj = {
  num: 42,
  getNum() {
      return this.num;
  }
};

const detachedGetNum = obj.getNum.bind(obj); // used bind
console.log(detachedGetNum());  // Outputs: 42


## 2. Explaination Video Link

[text](https://drive.google.com/file/d/1wmz-HbZgy5xfBn9K_eYBJHAjaOWRS8fQ/view?usp=sharing)


## 3. Output based
function sum() {
  return this.a + this.b + this.c;
}
let obj = { a: 1, b: 2, c: 3 };
console.log(sum.call(obj));
console.log(sum.apply(obj));

## 4. Related topic Question





