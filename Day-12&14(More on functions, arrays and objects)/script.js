// Level-1
// Q1. Write a function `sayHello()` that prints "Hello Javascript";

// function sayHello() {
//   console.log("Hello Javascript");
// }
// sayHello();

// Q2. Create a function `add(a, b)` that returns their sum and log the result.

// function add(a, b) {
//   console.log(a + b);
// }

// add(1, 2);

// Q3. Write a function with default parameter `name = Guest` that prints `Hii <name>`.

// function intro(name = "Guest") {
//   console.log(`Hii ${name}`);
// }

// intro();

// Q4. Use rest parameters to make a function that adds unlimited numbers.
// function addUnlimited(...nums) {
//   let sum = 0;
//   nums.forEach(function (val) {
//     sum = sum + val;
//   });
//   console.log(sum);
// }
// addUnlimited(1, 2, 3, 4, 5);

// Q5. Create an IIFE that prints `"I run instantly!"`.
// (function () {
//   console.log("I run instantly!");
// })();

// Q6. Make a nested function where the inner one prints a variable from the outer one.
// function nested() {
//   let a = 12;
//   function second() {
//     console.log(a);
//   }
//   second();
// }

// nested();

// Q7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.
// let fruits = ["mango", "banana", "apple", "grapes", "orange"];

// fruits.unshift("guava");
// fruits.pop();

// Q8. Use a `for` loop to print all elements of an array.
// let arr = [10, 20, 30, 40, 50];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// Q9. Create an object `person` with keys `name`, `age`, and `city`, and print each key’s value.

// let person = {
//   name: "Theodore Lynch",
//   age: 47,
//   city: "Utah",
// };
// console.log(person.name, person.age, person.city);
// for (key in person) {
//   console.log(key, ":", person[key]);
// }

// Q10. Use `setTimeout()` to log `Times Up !` after 2 seconds

// setTimeout(function () {
//   console.log("Times Up!");
// }, 2000);

// Level-2
// Q1. Write a higher-order function `runTwice(fn)` that takes another function and executes it two times.
// function runTwice(val) {
//   val();
//   val();
// }

// runTwice(function () {
//   console.log("Hello");
// });

// Q2. Create one pure function that always returns the same output for a given input, and one impure function using a global variable.

// function pure(a) {
//   return a * 5;
// }
// console.log(pure(5));

// let b = 12;
// function impure(val) {
//   b += 12;
//   console.log(val + b);
// }
// impure(2);
// impure(2);

// Q3. Write a function that uses object destructuring inside parameters to extract and print `name` and `age`
// function object({ name, age }) {
//   console.log(name + " & " + age);
// }
// object({
//   name: "Nitya",
//   age: 21,
// });

// Q4. Demonstrate the difference between normal function and arrow function when used as object methods (the `this` issue).

// this ek aisa keyword hai jo ki ek dynamic hai iski value badal jaati hai baar baar.

// if you want to know the value of "this" -
// console.log(this); // Window
// function abcd() {
//   console.log(this); // Window
// }
// abcd();

// ******Important******
// In all the above the cases the value of "this" is "Window" but if you access "this" inside an object then it will give you that particular object.

// let object = {
//   name: "Tyler",
//   fnc: function () {
//     console.log(this);
//   },
//   fnc2: () => {
//     console.log(this);
//   },
//   fnc3: function () {
//     let fnc31 = () => {
//       console.log(this);
//     };
//     fnc31();
//   },
//   fnc4: function () {
//     function fnc4() {
//       console.log(this);
//     }
//     fnc4();
//   },
// };

// object.fnc(); // {name: 'Tyler', fnc: ƒ}
// object.fnc2(); // In arrow functions "this" keyword always takes value from the parent. It borrows the value from the parent, so as "object" is created in global space, it will give "Window". So the value of "this" will be "Window".
// object.fnc3(); // Now again it will give you the {name: 'Tyler', fnc: ƒ, fnc2: ƒ, fnc3: ƒ}. Because
// object.fnc4(); // It will rewind the value again so now the value will again be "Window". So whenever there is a need of doing a function inside a function in an object, everytime use arrow function.

// Q5. Given an array of numbers, use `map()` to create a new array where each number is squared.

// let arr = [1, 2, 3, 4, 5, 6];
// let newArr = arr.map(function (val) {
//   return val ** 2;
// });

// console.log(newArr);

// Q6. Use `filter()` to get only even numbers from an array.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArray = arr.filter(function (val) {
//   if (val % 2 === 0) {
//     return val;
//   }
//   // Or
//   // return val % 2 === 0;
// });
// console.log(newArray);

// Q7. Use `reduce()` to find the total salary from an array of numbers `[1000, 2000, 3000]`.
// let arr = [1000, 2000, 3000];
// let totalSalary = arr.reduce(function (acc, val) {
//   return acc + val;
// }, 0);
// console.log(totalSalary);

// Q8. Create an array of names and use `some()` and `every()` to test a condition (e.g., all names longer than 3 chars).
// let arr = ["Nitya", "Virat", "Rohit", "Mahi"];
// let someArr = arr.some(function (val) {
//   return val.length > 4;
// });
// console.log(someArr);

// let everyArr = arr.every(function (val) {
//   return arr.length > 4;
// });
// console.log(everyArr);

// Q9. Create an object `user` and test the behavior of `Object.freeze()` and `Object.seal()` by adding/changing keys.
// let user = {
//   name: "User1",
//   email: "user1@email.com",
//   age: 12,
// };

// Object.freeze(user);
// user.name = "Nitya";
// console.log(user); // In freeze you can not do anything like, you can not change the properties, delete or add.

// Object.seal(user);
// user.name = "Nitya";
// delete user.name;
// console.log(user); // But in seal you can modify the properties but you can not add or delete anything.

// Q10. Create a nested object (`user → address → city`) and access the city name inside it.
// let user = {
//   name: "Nitya",
//   age: 21,
//   address: {
//     city: "BBSR",
//   },
// };

// console.log(user.address.city);
// console.log(user["address"]["city"]);
// let { city } = user.address;
// console.log(city);
