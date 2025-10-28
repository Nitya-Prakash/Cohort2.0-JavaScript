// Add comments -
// use "//" to comment anything
// With the help of comment you can write anything in the file and it won't run. It is mainly used to explain the code

// Datatypes -
// float - 12.8
// number - 12
// string - "Hello"
// boolean - true / false
// null - when you don't have any value to give right now, then for now you can give null (intentionally)

// array - ek se jyada value hold kar sakta hai
// [1,2,3,4]
// ["Hello", "hey", "cjd"]

// object - ek se jyaada properties , ek bande ki hold karne ke liye hota
// array ek se jyada bando ke liye hota hai
// object mein ek bande kai sare properties hold karne ke liye hota hai.

// symbol -

// undefined - jab koi variable banaye but uski value nhi di gayi
// NaN (Not a Number) - koi number ke saath koi eisa operation kia jay , jo possible nhi hai then humein NaN milta hai
// Infinity - infinity
// for eg - 1/0 // output - infinity

// primitive - string, number, bigInt, booleans, null, undefined, NaN, Symbol etc
// Jinki value direct copy ho sakta hai , wo primitive hota hai

// for eg -
// let num1 = 12;
// let num2 = num1;
// num2 = 13;
// console.log(num1, num2); // 12, 13

// referrence - arrays, objects, functions (direct copy nhi ho sakti)

// for eg -
// let a = [12, 13, 14];
// let b = a;
// console.log(a.pop());
// console.log(b); // [12, 13]
// console.log(a); // [12, 13]
// It means a ka copy b mein nhi gaya hai, b mein a ka reference gaya hai matlab b , a hi hai matlab if you change anything in b then a will also change accordingly. so in reference you can not copy directly. To copy directly (both should not change if anything happens to one), you have to use spread operator [...a].
