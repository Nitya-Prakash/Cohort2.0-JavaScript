// Math.random -

// let num = Math.random() * 100;
// let finalNum = Math.floor(num);
// console.log(finalNum);

// Generating random colour -
let box = document.querySelector("#box");

box.addEventListener("click", () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

// let arr = ["Virat", "Rohit", "Dhoni", "Boom", "Jaddu", "Kl"];
// let name = Math.floor(Math.random() * arr.length);

// console.log(arr[name]);
