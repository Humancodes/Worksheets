// Ques Write a function that performs strict string concatenation without unintended coercion.

// Input: ["Hello", 42, true]

// Expected Output: "Hello42true"

function convert([...list]) {
  let newString = "";
  list.forEach((item) => (newString += String(item)));
  console.log(newString);
}

convert(["Hello", 42, true]);
