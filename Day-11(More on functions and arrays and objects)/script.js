// Pure vs impure functions -
// Aisa functions jo bahar ki values ko affect na kare, wo hote hain pure functions.
// same input = same output

// For eg -
// let a = 12;

// function abcd() {
//   console.log("Hello");
// } // Here the function is not affecting any of the code outside its scope.

// But aisa function jo bahar ki values ko affecting kare, wo hote hain impure functions.
// different output bhi ho sakta hai
// For eg -
// let a = 12;
// function abcd() {
//   a++;
// } // Here you can see, this function is affecting the value of a. So it is impure function.

// Closures -
// Ek function jo return kare ek function and return hone wala function parent function ki koi variable ko use kar raha hoga. See -

// function abcd() {
//   let a = 12;
//   return function () {
//     console.log(a);
//   };
// }

// abcd()(); // So this whole thing is called closures.

// Arrays -

// There are two methods to create an array -

let arr = [1, 2, 3, 4, 5];
// let arr2 = new Array(1, 2, 3, 4, 5);

// push - Add a value in the last of the array.
// arr.push(7); // [1, 2, 3, 4, 5, 7]

// pop - Remove a value from the last in an array.
// arr.pop(); // [1, 2, 3, 4]

// shift - Remove a value value from the first.
// arr.shift(); // [2, 3, 4, 5]

// unshift - Add a value in the beginning of the array.
// arr.unshift(0);

// indexOf -
// arr.indexOf(3); // The index of 3 is 2.

// Destructuring -
// let arr4 = [26, 48, 73, 34, 98];
// let [a, b, , c] = arr4; // a = 26, b = 48, c = 34

// splice - Removes particular values
// index number and how many numbers from that index you want to remove.
// arr.splice(2, 2); // [1, 2, 5]

// slice - It also removes values from an array, but the difference from the splice is, splice changed the original array. But in case of slice it doesn't changes the original array, It makes a copy of the orignal array and perform changes in that copied array.
// start index (from where to begin) and end index (till where to stop (but end is not included))
// let newArray = arr.slice(2, 4); // [3, 4]

// reverese - reverse the original array.
// arr.reverse(); // [5, 4, 3, 2, 1]

// spread operator -
// To copy any array, we use spread operator(...). It doesn't bring the refenence of the original array. It creates a new array of that array, so any changes made here doesn't reflect in the original array.
// let arr5 = [...arr];

// sort - sort the array in a particular order. It can be ascending or descending
// sort always accepts a function and that function always returns the value.
// let arr2 = [10, 67, 83, 25, 42];
// arr2.sort(function (a, b) {
//   return a - b; // Asscending // [10, 25, 42, 67, 83]
//     // a - b
//     // Negative → a is smaller → a first
//     // Positive → a is bigger → b first
// });

// arr2.sort(function (a, b) {
//   return b - a; // Descending // [83, 67, 42, 25, 10]
// });

// forEach -
// It accepts a function and this function will run for every element present in the array.

// arr.forEach(function (val) {
//   console.log(val + 2); // 3 4 5 6 7
//   // Means the function ran for 1 then for 2 then for 3 and so on and those values came one by one in the val.
// });

// map -
// map sirf tab use karna hai jab aapko ek new array banana hai pichle array ke data ke basis par
// Jab bhi map dikhe tab ek blank array man mein bana liya karo and wo function jo bhi return kar raha hoga wo us array mein dalte raho.

// let mapArray = arr.map(function (a) {
//   return 13; // [13, 13, 13, 13, 13]
//   // As the original array was of 5 elements, so this map runs for every element and placed the value that many times which the function returned, in a new blank array.
// });

// filter -
// same as filter but here you don't return any values, here you return true or false.

// let filterArray = arr.filter(function (a) {
//   if (a > 2) return true; // [3, 4, 5]
//   // Only those values which passed the if check
// });

// reduce -
// It reduces the array to a single value
// let reduceArray = arr.reduce(function (accumulator, val) {
//   return accumulator + val;
// }, 0);
// Here you pass 2 values, one is accumulator and another is val. You can name anything to those two values btw. So this is how it works -
// first you set the accumulator value whatever you want, in this case we saved 0 as you can see in the end of the function. So now the value of accumulator is 0 and val will be 1 (from arr). then after the addition the final value will be stored in accumulator. So now 0 + 1 = 1, it will be stored in accumulator. The new value of the accumulator is 1 and it repeats again. 1 + 2 = 3, now the accumulator value is 3 and this goes on till the end of the array. And the value of the accumulator in the end of the loop will be the answer of the reduceArray and you can see it.

// find -
// It finds the very first value in the array which satisfy the oondition of the function.
// let arr3 = [
//   { id: 1, key: 1 },
//   { id: 2, key: 2 },
//   { id: 3, key: 1 },
// ];

// let findArr = arr3.find(function (val) {
//   return val.key === 1; // {id: 1, key: 1}
//   // As you can see the key is same in 1st object as well as 3rd object but it returned only the first one.
// });

// some -
// It gives the answer in true or false. It finds if there are some of the element in the array which matches the condition, if there is some then it will give you true as an answer.
// let someArr = arr.some(function (val) {
//   return val > 2; // true
// });

// every -
// It also gives answer in true or false. But here, every elements in the array should match the condition otherwise it will give you false.
// let everyArr = arr.every(function (val) {
//   //   return val > 0; // true
//   //   return val > 2; // false
// });

// Objects -

let obj = {
  name: "Nitya",
};

// Accessing the value -
// console.log(obj.name); // Nitya

// let abc = "name";
// console.log(obj[abc]); // Nitya

// Delete any property -
// delete obj.name;

// for in loop -
// for (varibale in object name)
// for (let key in obj) {
//   //   console.log(key); // name, age, email
//   // Access the values here
//   // obj.key ❌
//   console.log(key, ":", obj[key]);
// }

// Object.keys -
// Object.keys(obj); // ['name', 'age', 'email']

// Object.entries -
// Object.entries(obj);
// [Array(2), Array(2), Array(2)]
// 0 : (2) ['name', 'Nitya']
// 1 : (2) ['age', 21]
// 2 : (2) ['email', 'a@a.com']

// Copy with spread operator
// let obj2 = { ...obj };

// Copy with Object.assign()
// Same as it is of spread operator

// let obj2 = Object.assign({}, obj);
// let obj2 = Object.assign({ Phone: 12345 }, obj); // {Phone: 12345, name: 'Nitya', age: 21, email: 'a@a.com'}

// Deep clone -
// So deep clone means if there is an nested object then you cannot copy that object fully with spreaad operator. You can copy but the properties of the parent object will be copied fully but the nested objects won't, it will pass the refenrece of that object. So if change the value of that copied object thinking it wont change the nested object of the original object then you are wrong. So to prevent this we do this -
// let nestedObj = {
//   name: "Nitya",
//   age: 21,
//   address: {
//     city: "Bhubaneswar",
//     contactNo: {
//       Phone: 123456789,
//     },
//   },
// };

// let nestedObj2 = { ...nestedObj }; // You can not do this to copy an object
// nestedObj2.address.city = "Jajpur";
// console.log(nestedObj2); // city: "Jajpur"
// console.log(nestedObj); // city: "Jajpur" // See here also the value of the city has been changed

// So you have to do this -
// let nestedObj2 = JSON.parse(JSON.stringify(nestedObj));
// nestedObj2.address.city = "Jajpur";
// console.log(nestedObj2); // city: "Bhubaneswar"
// console.log(nestedObj); // city: "Jajpur"
// JSON.stringify() made the whole object into a string component and parse converted it to an object. So nestedObj2 now has a complete new object with same property. So now if you change anything in the nestedObj2 it won't affect the nestedObj

// Computed Properties -
// let role = "admin";

// let details = {
//   name: "Nitya",
//   age: 21,
//   email: "a@a.com",
//   addresses: {
//     city: "Bhubaneswar",
//   },
//   [role]: "Nitya",
// };
// You can assign that variable inside a object.
