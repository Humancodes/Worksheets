function createIncrementers() {
  let result = [];
  for (var i = 0; i < 3; i++) {
    result.push(() => i);
  }
  return result;
}
console.log(createIncrementers()[0]());
