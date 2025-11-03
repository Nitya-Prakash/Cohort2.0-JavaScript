// Opeartors in js

// 1. Airthmetc Operators -
// + - * / % **

// 2. Assignment operators -

// = += -= *= /= %=
let x = 2;
// x = x+2; // or
// x += 2;
// x -= 2;
// x *= 2;
// x /= 2;
// x %= 2;

// 3. Comparison operators -
// == === != !== < > >= <=

// == not strict compare NEVER USE THIS
// === strict compare ALWAYS USE THIS
// != NEVER USE THIS
// !== ALWAYS USE THIS
// >
// <
// >=
// <=

// 4. Logical Operators
// && || !

// && - Dono side ko sahi hona padega
// true && true = true
// true && false = false
// false && true = false
// false && false = false

// || - Koi bhi ek side agar sahi ho gaya then also it will work
// true || true = true
// true || false = true
// false || true = true
// false || false = false

// ! - true ko false kardega and vice-versa

// ex - !true = false
// !false = true
// if (!12 > 13) {
//   console.log("If condition will run.");
// }

// 5. Ternary Operator -
// condition ? do this : do that
// 12 > 13 ? console.log("Hello!") : console.log("Hey"); // Hey

// 6. Type checking operators -
// typeof
// it gives you the type of a particular thing.

// instanceof

// let arr = 12;
// arr instanceof Array // true
// Kuch bhi banaoge , wo top pe likhi gai cheezon se aata hai . It means if you assign a value 12 then it is an instance of that top level Number class.

// 7. String operator -
// + (concatination)

// 8. Spread and Rest Operator

// Spread (...)
// let arr = [1, 2, 3, 4];
// let arr2 = [...arr];

// Rest (...) (Specially used for functions)

// function abc(a, b, c, ...rest) {
//   console.log(...rest); // 4 5
// }
// abc(1, 2, 3, 4, 5);

// 9. Nullish Coalescing Operator
// ?? (fallback only when null / undefined)

// 12 > 13 ?? console.log("sorry"); // false
// null ?? console.log("sorry"); // sorry

// 10. Optional chaining
// ?. (safe access to nested values)

// let obj = {};
// obj?.name?.first;
// So if the nested values are present then it will give the answers , if not then it will not give any errors
