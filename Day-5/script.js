// Loops and conditionals in javascript -

// conditionals -

// Proggramming mein kai baar aisa phase aata hai jaha par aapko decide karna padta hai ki kya karein , option A choose karein ya option B , un cheezon ke liye ham coditionals use karte hain.

// if-else, else-if, ternary operator
// if-else -
// let a = 12;
// if (a > 10) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// truthy and falsy -
// 0, "", false, NaN, null, undeifined, document.all  -----> converts to false
// Anything else -----> converts to true

// if (12) {
//   console.log("Truthy value");
// } else {
//   console.log("Falsy value");
// } // Truthy value

// if (0) {
//   console.log("Truthy value");
// } else {
//   console.log("Falsy value");
// } // Falsy value

// ternary -
// condition ? true : false

// 12 > 13 ? console.log("Yes it is true !") : console.log("No it is false !");

// switch case -
// switch (4) {
//   case 1:
//     console.log("One");
//     break;
//   case 2:
//     console.log("Two");
//     break;
//   case 3:
//     console.log("Three");
//     break;
//   case 4:
//     console.log("Four");
//     break;
//   default:
//     console.log("Default Case");
// }

// Loops - repeat karna

// straight forward loops - jahan par na hi value badalti hai na hi printing badalti hai, for eg -
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// dynamic loops - jahan par value badal sakti hai and printing bhi badal sakti hai

// for loop -
// for(start; end; change) {
// }

// print 5 times hello -
// for (let i = 1; i < 6; i++) {
//   console.log("Hello");
// }

// print 11 12 13 14 15
// for (let i = 11; i < 16; i++) {
//   console.log(i);
// }

// print 22 - 33
// for (let i = 22; i < 34; i++) {
//   console.log(i);
// }

// print 101-156
// for (let i = 101; i < 156; i++) {
//   console.log(i);
// }

// print 30 - 10
// for (let i = 30; i > 9; i--) {
//   console.log(i);
// }

// print 121 - 12
// for (let i = 121; i > 11; i--) {
//   console.log(i);
// }
