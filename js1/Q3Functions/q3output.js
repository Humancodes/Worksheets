function Double([...arr]) {
  return arr.map((item) => item * 2);
}

function HOC(funt) {
  console.log(funt((prev) => [...prev]));
}

HOC(() => Double([2, 4, 6]));
