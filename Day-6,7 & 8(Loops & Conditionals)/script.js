// Level - 1
// 1. Print numbers from 1 to 10;

// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

// 2. Print only even numbers form 1 to 20

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// *OR*
// for (i = 2; i < 21; i += 2) {
//   console.log(i);
// }

// 3. Print numbers from 10 to 1

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// 4. Print the word "Yes" 5 times

// for (let i = 1; i < 6; i++) {
//   console.log("Yes");
// }

// 5. Print whether the numbers from 1 to 10 are even or odd

// for (let i = 1; i < 11; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} - Even`);
//   } else {
//     console.log(`${i} - Odd`);
//   }
// }

// 6. Ask user for a number and say if it is positive or negative

// let number = +prompt("Suggest a number");
// adding a + sign before any string (which can be converted to number) can convert it to a number. There are two more methods are there to convert a string to number - one is parseInt() and the second one is Number().

// if (number >= 0) {
//   console.log(`${number} is a positive number`);
// } else {
//   console.log(`${number} is a negative number`);
// }

// 7. Ask user’s age and check if eligible to vote

// let age = prompt("Enter your age - ");

// if (age >= 18) {
//   console.log("You are eligible for vote !");
// } else {
//   console.log("You are not eligible for vote !");
// }

// *OR* "Edge cases handled !"

// if (age === null) {
//   console.error("You cancelled it !");
// } else {
//   if (age.trim() === "") {
//     console.error("Please enter something !");
//   } else {
//     age = Number(age.trim());
//     if (isNaN(age)) {
//       console.error("Please enter a number !");
//     } else {
//       if (age <= 0) {
//         console.log("Invalid !");
//       } else if (age >= 18) {
//         console.log("You are eligible for vote !");
//       } else {
//         console.log("You are not eligible for vote !");
//       }
//     }
//   }
// }

// shorter version

// function isEligibleorNot(age) {
//   if (age === null) return "You cancelled it !";
//   if (age.trim() === "") return "Please enter something !";
//   age = Number(age);
//   if (isNaN(age)) return "Enter a number !";
//   if (age <= 0) return "Invalid !";
//   if (age >= 18) return "You are eligible for vote !";
//   return "You are not eligible for vote !";
// }
// let age = prompt("Enter your age - ");
// console.log(isEligibleorNot(age));

// 8. Print multiplication table of 5

// for (let i = 1; i < 11; i++) {
//   console.log(`5 x ${i} = ${5 * i}`);
// }

// for (let i = 1; i < 11; i++) {
//   console.log(`38 x ${i} = ${38 * i}`);
// }

// 9. Count how many numbers between 1 and 15 are greater than 8

// let count = 0;
// for (let i = 1; i < 16; i++) {
//   if (i > 8) {
//     count++;
//   }
// }
// console.log(count);

// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

// const password = 1234;
// let userPassword = +prompt("Password :");

// if (password === userPassword) {
//   console.log("Access");
// } else {
//   console.log("Password is incorrect !");
// }

// Level 2 –
// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

// let password = 1234;
// let attempts = 3;

// while (attempts > 0) {
//   let userPassword = +prompt("Password -");

//   if (password === userPassword) {
//     console.log("Access granted !");
//     break;
//   } else {
//     attempts--;
//     if (attempts > 0) {
//       console.log(`Password incorrect. You have ${attempts} attempts left !`);
//     } else {
//       console.log("Account locked!");
//     }
//   }
// }

// let attempts = 0;
// let password = 1234;

// let userPassword = +prompt("Password - ");
// attempts++;

// if (password === userPassword) console.log("Opened");

// while (password !== userPassword) {
//   if (attempts === 3) {
//     console.error("Acount locked !!");
//     break;
//   }
//   userPassword = +prompt("Password - ");
//   attempts++;

//   if (password === userPassword) console.log("Opened");
// }

// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

// let words = prompt("Suggest some words -");
// let count = 0;

// while (words !== "stop") {
//   if (words === "yes") {
//     count++;
//   }
//   words = prompt("Suggest some words -");
// }
// console.log("Stopped !");
// console.log(`Wrote "yes" for ${count} times`);

// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

// for (let i = 1; i < 51; i++) {
//   if (i % 7 === 0) {
//     console.log(i);
//   }
// }

// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

// let sum = 0;

// for (let i = 1; i < 31; i++) {
//   if (i % 2 !== 0) {
//     sum += i;
//   }
// }
// console.log(sum);

//15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.
// let num = +prompt("Suggest a number - ");

// while (num % 2 !== 0) {
//   num = +prompt("Suggest a number - ");
// }
// console.log(`${num} an even number`);

// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

// let firstNumber = +prompt("Enter the first number");
// let secondNumber = +prompt("Enter the second number");

// if (firstNumber > secondNumber) {
//   for (let i = firstNumber; i >= secondNumber; i--) {
//     console.log(i);
//   }
// }

// if (firstNumber < secondNumber) {
//   for (let i = firstNumber; i <= secondNumber; i++) {
//     console.log(i);
//   }
// }

// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.
// let counter = 0;

// for (let i = 1; i <= 20; i++) {
//   if (counter === 3) break;
//   if (i % 2 !== 0) {
//     console.log(i);
//     counter++;
//   }
// }

// 18. Ask user 5 numbers. Count how many are positive.
// Use loop + condition + counter.

// let counter = 0;

// for (let i = 1; i < 6; i++) {
//   let num = +prompt("Enter a number - ");

//   if (num >= 0) {
//     counter++;
//   }
// }
// console.log(counter);

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

// let maxBalance = 1000;
// let limit = 0;

// while (maxBalance > 0 && limit !== 3) {
//   let withdrawalAmount = +prompt("Enter the withdrawl amount");
//   if (withdrawalAmount <= maxBalance) {
//     console.log(`${withdrawalAmount}₹ is deducted`);
//     maxBalance -= withdrawalAmount;
//   } else {
//     console.log("Insufficient balance");
//     break;
//   }
//   limit++;
// }

// console.log(`Remaining balance is ${maxBalance}₹`);
