function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
    return;
  }
  function decrement() {
    count--;
    console.log(count);
    return;
  }

  function reset() {
    count = 0;
    console.log(count);
    return;
  }
  return {
    increment,
    decrement,
    reset,
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.reset(); // 0
