// Functions -
// parameters -

// function abcd(a, b, c) { // Parameters
//   // Now a,b & c are required parameters. If you don’t pass any arguments into them, they will return undefined values.
// }

// abcd();

// Arguments -
// The values you pass to the parameters when calling a function are called arguments.

// function abcd(a, b, c) {
//   console.log(a, b, c);
// }

// abcd(1, 2, 3); // Arguments
// These are also called positional arguments because you pass each value in the same order as the parameters.

// Destructuring -

// function abcd(obj) {
//   console.log(obj);
// }

// abcd({ name: "Nitya", age: 21 });

// You can destructure the above function into this -

// function abcd({ name, age }) {
//   console.log(name, age);
// }

// abcd({ name: "Nitya", age: 21 });

// Rest operators -
// When there are many arguments, we need to create the same number of parameters. To avoid this, we use the rest operator.

// function abcd(...val) {
//   console.log(val);
// }

// abcd(1, 2, 3, 4, 5, 6, 7, 8, 9);
// If "..."" uses in function parameters then it will be called as rest operator and if it used in array or in objects then it will be called as spread operator.

// Default -
// Assigning default values to the parameters -
// function abcd(a, b, c = 0) {
//   console.log(a, b, c); // 2 1 0
// }

// abcd(2, 1);

// spread -

// function abcd(a, b, c, d) {
//   console.log(a, b, c, d); // Printed the value in the same order as of parameters
// }

// let arr = [1, 2, 3, 4];
// abcd(...arr);

// Hoisting -
// Hoisting difference between function expression and function declaration

// In function declaration you can call the function even before declaring it. Like this -
// greet();
// function greet() {
//   console.log("Hello");
// }

// But you can not call the funciton before in the case of function expression. As you are saving the function in a variable so it acts like variable hosting. Like as you can not access the variable (specially in "let" case) before calling it , if you call then it will give you ReferenecError, same thing happens here also.

// abcd();

// let abcd = function () {
//   console.log("Hii");
// };

// Nested functions -

// function abcd() {
//   function defg() {
//     console.log("Helloo");
//   }
//   defg();
// }

// abcd();

// Scope chain -
// let a = 12;

// function abcd() {
//   let b = 13;
//   function defg() {
//     console.log(b);
//   }
//   defg();
// }
// abcd();
// variable a can be accessed anywhere as it is made outside of the function so it is now global scoped. But the scope of variable b is now only inside the function of abcd(), you can not use it outside of that function.

// Immediately Invoked Function Expression (IIFE) -
// Call the function immediatly.

// (function () {
//   console.log("Hello");
// })(); // This is called IIFE.

// Fat arrow functions or Arrow functions -
// function abcd() {
//   console.log("Hello");
// }
// abcd();

// You can rewrite the above function into like this -
// let abcd1 = () => {
//   console.log("Hello");
// };
// abcd();

// anonymous function -
// A function who has no name
// let fnc = function () {
//   console.log("Hello");
// };
// The function has no name, but as we stroed it in a variable so the variable has name

// Higher order function -
// Ye wo function hota hai, jo ek function accept kare as a parameter or return kare ek function ko.
// For eg -

// function abcd(val) {
//   val();
// }

// abcd(function () {
//   console.log("Hello");
// }); // So here as you can see, the abcd function is accepting a function as a paramter, so abcd function will be called as a higher order function.

// Or

// function abcd() {
//   return function () {
//     console.log("Hello");
//   };
// }
// abcd()(); // the second paranthesis to call the inner function. Or you can use the below method too to call the inner function.
// let fn = abcd();
// fn();

// first-class functions -
// It means we can treat the functions as values also. For eg -

// function abcd(val1, val2) {
//   val1();
//   console.log(val2);
// }

// abcd(function () {
//   console.log("hello");
// }, 2);

// As you can see, here you can able to pass a function as an arguments and accessing it as a value. So this concept is called first class functions.
