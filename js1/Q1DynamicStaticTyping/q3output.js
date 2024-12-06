function getSum([...arr]) {
  let newArr = arr.map(Number);
  return newArr.reduce((sum, curr) => sum + curr);
}

console.log(getSum(["10", "20", "30"]));
