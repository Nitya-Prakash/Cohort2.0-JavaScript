// DOM - Document Object Model
// 4 Pillars of DOM
// 1. Selection of elements
let h1 = document.querySelector("h1");
// document.querySelectorAll("")
// document.getElementById("")
// document.getElementsByClassName("")
// document.getElementsByTagName()

// console.log(h1);

// 2. Changing html
h1.innerHTML = "Hello Guys !!";
// h1.innerHTML = "<i>Hello Guys !!</i>";
// In inner html you can change the content as well as you can change the html tags or attributes.

// h1.textContent = "Hello Guys !!";
// h1.textContent = "<i>Hello Guys !!</i>";
// In textContent you can only change the text of that element, you can not change the html tags or attributes.

// 3. Changing CSS
h1.style.color = "red";
h1.style.backgroundColor = "green";

// 4. Event Listeners
h1.addEventListener("dblclick", function () {
  console.log("Hello");
});
