# 1. Concurrency in JavaScript: Single-Threaded Nature & Event Loop
## 1. Debug 
### Fixed the code
function fetchData() {
    const task1 = new Promise(resolve => {
        setTimeout(() => {
            console.log("Task 1");
            resolve();
        }, 0);
    });
    const task3 = Promise.resolve().then(() => console.log("Task 3"));
    Promise.all([task1, task3]).then(() => {
        console.log("Completed!");
    });
    console.log("Task 2");
}

fetchData();

## 2. Explaination Video Link


## 3. Output based
console.log("A");
setTimeout(() => console.log("B"), 1000);
Promise.resolve().then(() => console.log("C"));
console.log("D");




## 4. Related topic Question
