// Creating Element -
// You can create elements in js directly.
// document.createElement("h1");

// let h1 = document.createElement("h1");
// console.log(h1);

let btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   let h1 = document.createElement("h1");
//   h1.innerHTML = "Hello World !!";
//   console.log(h1);
// });

// Append child -
// Showing the elements in the page by keeping the existing things as it is.

let main = document.querySelector("main");

btn.addEventListener("click", () => {
  let h1 = document.createElement("h1");
  h1.innerHTML = "Hello World !!";
  main.appendChild(h1);
});
