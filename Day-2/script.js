// Topics -
// 1. var, let, const
// 2. console
// 3. prompt()
// 4. alert()
// 5. strings
// 6. slice
// 7. Template literals or Template strings
// 8. split()
// 9. replace()
// 10. includes("h")
// -------------------------------------------------------------------------------------------------------------------------------------------------

// 1. var, let, const -

// 1.1. var -
// --> it is old and risky.
// --> it is scoped to functions not blocks, means the whole file is converted to a function so it means var is global scoped , you can use it anywhere
// --> it can be redeclard or reassigned which is not good. for ex -

// var ab = 12;
// var ab = 13;
// Here you can redeclare the variable.

// --> Hoisted to the top with "undefined" value.

// 1.1.a. Hoisting -
// --> It means when you define something, the value goes to the top of the file. for ex -
// var a; // here you didn't define anything , so the default value for this is "undefined", it will go to the top of the file , if you console "a", before declaring, then you will see something like this -

// console.log(a); // undefined
// var a = 12;

// --> It means js knows that there is something like "a", which has declared later on the file but not at the consoling time so it is showing the value "undefined". It works like this - first var a = 12; will be converted to var a = "undefined", it will go to the top of the file, and where you are assigning the value to the var, the value will be 12. so as you are consoling the value before declaring , it takes the by default value "undefined" from the top of the file . It is basically called hoisting.

// 1.2. let -
// --> It is modern and safe.
// --> Scoped to blocks only "{}" means it respects the curly braces.
// --> Can be reassigned not redeclared. for ex -

// let xy = 23;
// xy = 24; // You can do this means , you can reassign that value but
// let xy = 35; // You can not redeclare the variable in let , as it doesn't the allows to do something like this as it is problematic.

// --> It is also hoisted but it stays in Temporal Dead Zone.

// 1.2.a. Temporal Dead Zone -
// --> It means when you declare a varible using let, it also works like hoisting, means for ex if let b = 12; then it also goes to the top with the default value undefined but the catch is if you console the value of a before declaring it , it will give you this error - "Uncaught ReferenceError: Cannot access 'b' before initialization" means let doesn't allow to access any of its value before initialization or declaration. From the let b = "undefined" (which is now on top of the file) to the declaration part let b = 12; it stays in "Temporal dead zone".

// console.log(b); // Uncaught ReferenceError: Cannot access 'b' before initialization
// let b = 12;

// -------------------------------------------------------------------------------------------------------------------------------------------------

// 2. console -
// --> console.log(); // To show anything in the console.
// --> console.info(); // It is also same like console.log() but
// --> console.warn(); // You can give warnings for something
// --> console.error(); // You can show/throw the errors
// --> console.table({ name: "Nitya" }); // you can show the values in a tabular form.

// -------------------------------------------------------------------------------------------------------------------------------------------------

// 3. prompt() -
// let nm = prompt("name ?"); // Asking user any inputs.
// console.log(nm);

// -------------------------------------------------------------------------------------------------------------------------------------------------

// 4. alert() -
// --> Gives you a alert or some notifications on the website.
// alert("Warning !");

// -------------------------------------------------------------------------------------------------------------------------------------------------

// 5. strings -
// Anything inside "" or '' or `` will be called strings.
// console.log("Hello");

// -------------------------------------------------------------------------------------------------------------------------------------------------

// 6. slice -
// slice(the index number from which you want to slice , to the index number it will be sliced + 1) , ex -
// console.log("Hello world".slice(2, 6)); // llo

// -------------------------------------------------------------------------------------------------------------------------------------------------

// 7. Template literals or Template strings -
// ``
// You can do mathematical calculations or operations directly inside any strings.
// console.log(`Hello ${2 + 2}`); // Hello 4

// -------------------------------------------------------------------------------------------------------------------------------------------------

// 8. split() -
// console.log("Hello".split("")); // ['H', 'e', 'l', 'l', 'o'] // Here all the letters will be splitted individually in an array.
// console.log("Nitya Prakash".split(" ")); // ['Nitya', 'Prakash'] // Here the words/letters will be splitted whereever will be space " "
// console.log("Nitya Prakash".split("a")); // ['Nity', ' Pr', 'k', 'sh'] // Here it will be splitted through the letter "a"

// -------------------------------------------------------------------------------------------------------------------------------------------------

// 9. replace() - 1st letter will be replaced, for ex -
// console.log("Nitsa Prakash".replace("s", "y")); // Nitya Prakash // Only the first "s" will be replaced to "y"
// replaceAll() - All will be replaced, for ex -
// console.log("Nitsa Prakash".replaceAll("s", "y")); // Nitya Prakayh // All the "s" will be replaced to "y"

// -------------------------------------------------------------------------------------------------------------------------------------------------

// 10. includes("h") -
// --> Exists or not, and it gives boolean answers, for ex -
// console.log("Nitya Prakash".includes("a")); // true // means "a" is present here in this string.
// console.log("Nitya Prakash".includes("b")); // false // "b" is not present in this string.

// -------------------------------------------------------------------------------------------------------------------------------------------------
