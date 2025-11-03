// #1. Basic Operators (Arithmetic, Assignment, Increment, Decrement,Comparison, Logical, Bitwise)

// a. Create two numbers a = 10 and b = 3. Perform and log: a + b, a - b, a * b, a / b, a % b, a ** b.

// let a = 10;
// let b = 3;
// console.log(a + b); // 13
// console.log(a - b); // 7
// console.log(a * b); // 30
// console.log(a / b); // 3.333
// console.log(a % b); // 1
// console.log(a ** b); // 1000

// b. Write: let x = 5; x = x + 3; Now rewrite the same using +=. Do the same for -=, *=, /=.

// let x = 5;
// x = x + 3;
// console.log(x); // 8
// x += 3;
// console.log(x); // 8
// x -= 3;
// console.log(x); // 2
// x *= 3;
// console.log(x); // 15
// x /= 3;
// console.log(x); // 1.666

// c. let count = 5; Use count++ and log value before and after. Repeat for count–.

// let count = 5;
// console.log(count++); // 5
// In the above log , the count++ increments the value but not for now , means here the same value will be print as given but if you use afterwards then it will show you the incremented value.

// count++;
// console.log(count);
// Like above

// console.log(++count); // 7
// But here the count already incremnted before the console. So you will see the incremented answer.

// d. Compare two values: 5 == “5” and 5 === “5”. Observe difference.

// console.log(5 == "5"); // true
// "==", it doesn't check the type , so it is giving answers like this .(Don't use this one !)
// console.log(5 === "5"); // false
// "===", it strictly checks the type before giving the answer . So it is the best to use.

// e. Check if 10 is greater than 5, less than 20, and equal to 10.

// if (10 > 5 && 10 < 20 && 10 === 10) {
//   console.log("Yes it is true !"); // Yes it is true !
// }

// if (10 < 5 && 10 < 20 && 10 === 10) {
//   console.log("Yes it is true !");
// } else {
//   console.log("No it is not true"); // No it is not true
//   // As && operator wants the both side to be true or it will be false.
// }

// f. Try logical AND and OR: true && false , true || false, !(true)

// console.log(true && false); // false
// console.log(true || false); // true
// console.log(!true); // false

// g. Predict the result of: (5 > 3 && 10 > 8), (5 > 3 || 10 < 8)

// console.log(5 > 3 && 10 > 8); // true
// console.log(5 > 3 || 10 < 8); // true

// h. Bitwise (light intro): Evaluate 5 & 1 and 5 | 1. Write result and your observation (no deep explanation needed now).

// console.log(5 & 1); // 5
// console.log(5 | 1); // 1

// #2. Variable Hoisting in JavaScript

// a. Predict output of: console.log(a); var a = 10

// console.log(a); // undefined
// var a = 10;

// b. Predict output of: console.log(b); let b = 10
// console.log(b); // reference error: You can not access the value before initialization
// let b = 10;

// c. Predict output of: test() function test() { console.log(“Hello”) }

// test(); // Hello
// function test() {
//   console.log("Hello");
// }

// The thing is that in function declaration (where the function called directly with the function keyword), the function gets hoisted. So it moves to the top and you can declare the function before its declaration.

// d. Try writing a function expression before initialization and call it: hello() var hello = function() { console.log(“Hi”) } Write what happened and why.

// hello(); // TypeError: hello is not a function
// var hello = function () {
//   console.log("Hii");
// };

// But here in function expression (where you assign a function to a varibale or constant), it is not hoisted fully, so you can not call it before its declaration.

// As we already know about the hoisting, so here also the same thing happenning, we are calling the hello function before

// e. Write one sentence: What gets hoisted? What does not get hoisted fully?

// Var get hoisted completely, but let and const does not get hoisted fully.

// #3. Conditional Operators (if, else, else-if, ternary, switch)

// a. Take input using prompt for age. If age > 18 → log “Adult”. Else → log “Minor” .

// let age = prompt("Age ?");

// if (age > 18) {
//   console.log("Adult");
// } else {
//   console.log("Minor");
// }

// b. Write a program: If marks >= 90 → “A grade” ,Else if marks >= 75 → “B grade”, Else if marks >= 50 → “C grade”, Else → “Fail”

// let marks = prompt("Marks secured -");
// if (marks >= 90) {
//   console.log("A grade !");
// } else if (marks >= 75) {
//   console.log("B Grade !");
// } else if (marks >= 50) {
//   console.log("C Grade !");
// } else {
//   console.log("Fail");
// }

// c. Create a variable city = “Bhopal”. If city is “Bhopal” → log “MP”, Else if city is “Delhi” → log “Capital”, Else → log “Unknown City”.

// let city = "Bhopal";
// if (city === "Bhopal") {
//   console.log("MP");
// } else if (city === "Delhi") {
//   console.log("Capital");
// } else {
//   console.log("Unknown City");
// }

// d. Use ternary operator: Let score = 40. If score > 35 → “Pass” else “Fail” using a ternary.

// let score = 40;

// let grade = score > 35 ? "Pass" : "Fail";
// console.log(grade);

// e. Convert this if-else into a ternary: if (temperature > 30) { “Hot” } else { “Pleasant” }

// let temp = temperature > 30 ? "Hot" : "Pleasant";

// f. Write a switch case: Take day number (1 to 7). Print the day name. Default case: “Invalid Day”

// let day = Number(prompt("Day no."));

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednessday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// g. Using logical operators in condition: If age > 18 and country == “India” → log “Eligible for Vote” Else → “Not Eligible”

// let age = prompt("Age ?");
// let country = prompt("Country ?").toLowerCase();

// if (age > 18 && country == "india") {
//   console.log("Eligible for vote");
// } else {
//   console.log("Not eligible for vote");
// }
