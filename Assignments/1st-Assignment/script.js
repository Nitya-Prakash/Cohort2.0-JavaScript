// Q1. Open any website → right-click → Inspect → Console → type: document.title

// document.title
// 'Document'

// Q2. Try: alert(“Hello from Sheryians!”)

// alert("Hello from Sheryians!");

// Q3. Write one line in your own words: “If HTML is skeleton, CSS is clothes — what is JS?""

// If html is skeleton and css is clothes then JS is brain of that body , with which that body can operate any thing.

// Q4. Write one example of where you’ve seen JS being used (like popup, animation, etc.)

// forms handling, buttons, scrolling etc ..

// # Linking JavaScript Files -
{
  /* <script defer src="script1.js"></script>
     <script defer src="script2.js"></script> */
}
// console.log("Connected 1");

// # Running JS in Browser Console -

// 1. Open console and type: 2 + 2
// 2+2 = 4

// 2. Type: alert(“Hi”)

// 3. Try: prompt(“Your name?”)
// prompt("Yourname")
// 'Nitya'

// 4. Type: let city = “Bhopal”; city
// let city = "Bhubaneswar"
// city // Bhubaneswar

// # Variables and Keywords (var, let, const) -

// Q1. Declare your name using all three: var a = “Harsh”; let b = “Sheryians”; const c = “School”

// Q2. Try reassigning them: a = “Updated”; b = “Updated”; c = “Updated”

// var a = "Nitya";
// a = "Updated";
// Output - a = "Updated"

// let b = "Prakash";
// b = "Updated";
// Output - b = "Updated"

// const c = "Sahoo";
// c = "Updated";
// Output - Uncaught TypeError: Assignment to constant variable.

// Q3. Create a variable inside curly braces using let and log it outside.
// Q4. Predict output before running.

// {
//   let a = 12;
// }
// console.log(a);
// Uncaught ReferenceError: a is not defined (as let is block scoped)

// Q5. Write 3 examples where const is useful (like PI, baseURL, etc.) -

// Mathematical or scientific constants, baseURL, API keys etc

// # Logging and Interaction (console, alert, prompt) -

// Q1. Log name, age, and city using console.log, console.info, console.warn.

// console.log("Nitya, 21, Bhubaneswar"); // Nitya, 21, Bhubaneswar
// console.info("Nitya, 21, Bhubaneswar"); // Nitya, 21, Bhubaneswar
// console.warn("Nitya, 21, Bhubaneswar"); // ⚠️ Nitya, 21, Bhubaneswar

// Q2. Use prompt to take user’s name → alert a welcome message

// let name = prompt("Name ?");
// alert(name);

// Q3. Log typeof of user’s input.
// console.log(typeof name);

// Q4. Try: let age = prompt(“Enter age:”); console.log(age + 5); observe what happens.

// let age = prompt("Enter age: ");
// console.log(age + 5); // Output = 215
// console.log(typeof age); // Because whatever you take from prompt, it is a string , so the 5 is not added mathematically, it is concatinated with the age.

// # Working with Strings -

// Q1. let msg = “I love Sheryians”;
// let msg = "I Love Sheryians";

// Q2. Try msg.slice(2, 6) and predict the result.
// console.log(msg.slice(2, 6)); // Output - Love

// Q3. Try msg.split(” “) and count words.
// console.log(msg.split(" ")); // Output - ["I", "Love", "Sheryians"]

// Q4. Try msg.replace(“love”, “study at”).
// console.log(msg.replace("Love", "Study at")); // Output - I Study at Sheryians

// Q5. Template string example: let name = “Harsh”; console.log(Hey ${name}, welcome to JS!);

// let myName = "Nitya";
// console.log(`Hey ! ${myName}, Welcome to JS !`); // Output - Hey ! Nitya, Welcome to JS !

// Q6. Check if msg.includes(“love”)

// console.log(msg.includes("Love")); // true

// # Statements and Semicolons -

// Q1. Remove semicolon and check if code still runs.
// Yes

// Q2. Combine two statements in one line and see if it breaks.

// let a = 12
// let b = 13
// console.log(a) // 13
// console.log(b) // 12
// No it is not breaking;

// Q3. Write 3 console.log statements without semicolons and predict output.

// console.log("first"); // first
// console.log("second"); // second
// console.log("third"); // third

// # Comments -
// Q1. Write your name as a single-line comment.

// Nitya Prakash Sahoo

// Q2. Write a 3-line comment explaining what your code does.

//

// Q3. Hide one console.log using comment and check output.

// console.log("Hello");

// # Expressions vs Statements -

// Q1. Type 5 + 10 (expression).
// 5 + 10 = 15

// Q2. Type let x = 10; (statement).
// let x = 10; // x = 10;

// Q3. Which one gives a value immediately?
// Expression

// Q4. Try: let y = (5 + 10) * 2; console.log(y)
// let y = (5+10)*2;
// console.log(y);

// Q5. Write one line explaining the difference between both expression and statement.
// An expression produces a value where as statement performs an action but doesn't return a value directly.

// # Data Types -

// 1. let age = 25; let name = “Harsh”; let isStudent = true; let skills = [“ JS”,“HTML”]; let user = { city: “Bhopal” }; let x = null; let y; let z = Symbol(“id”)
// 2. Log typeof each variable.

// let age = 25;
// console.log(typeof (age)); // number

// let isStudent = true;
// console.log(typeof(isStudent)); // boolean

// let skills = ["JS", "HTML"];
// console.log(typeof skills); // object

// let user = { city: "Bhuabneswar" };
// console.log(typeof user); // object

// let x = null;
// console.log(typeof x); // object

// let y;
// console.log(typeof y); // undefined

// let z = Symbol("id");
// console.log(typeof z); // symbol

// Q3. Change one value and recheck typeof.

// Q4. Try adding a number and string together.

// console.log(2 + "Hello"); // 2Hello

// # Special Values -
// Q1. Log 1 / 0, 0 / 0, Number(“abc”), undefined + 1

// console.log(1 / 0); // infinty
// console.log(0 / 0); // NaN
// console.log(Number("abc")); // NaN
// console.log(undefined + 1); // NaN

// 2. Write what appears (Infinity, NaN, etc.)

// Q3. Write one line explaining when to use null vs undefined.

// When you intentionally want to give no value then you can use null but when a value is not assigned to a variable then by default that value will be undefined.

// # Primitive vs Reference -
// Q1. let x = 5; let y = x; y = 10; console.log(x, y)

// let x = 5;
// let y = x;
// y = 10;
// console.log(x, y); // 5 10

// Q2. let obj1 = { name: “Harsh” }; let obj2 = obj1; obj2.name = “Sheryians”;console.log(obj1.name)

// let obj1 = {
//   name: "Nitya",
// };
// let obj2 = obj1;
// obj2.name = "Prakash";
// console.log(obj1.name); // Prakash
// To avoid it we use spread operator {...obj1}.

// Q3. Observe which one changes together.
// The reference value changes together.
