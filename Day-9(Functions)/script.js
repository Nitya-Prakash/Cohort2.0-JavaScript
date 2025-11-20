// Functions in Javascript.

// You can access the arguments in 3 diff ways.
// 1.
// function info(name, age, email) { // All these are parameters
//   console.log(name, age, email);
// }

// info("Nitya", 21, "example@mail"); // All these are arguments

// 2. With arguments keyword.
// function info(name, age, email) {
//   console.log(arguments);
// }

// info("Nitya", 21, "example@mail");

// 3.
// function info() {
//   console.log(arguments);
// }

// info("Nitya", 21, "example@mail");

// Calling a single value -
// function info() {
//   console.log(arguments[0]);
// }
// info("Nitya", 21, "example@mail.com");

// Function hoisting.
greet();
function greet() {
  console.log("Hello");
}
