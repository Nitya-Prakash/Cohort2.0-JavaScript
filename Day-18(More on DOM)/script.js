// setTimeout -
// setTimeout(() => {
//   console.log("first");
// }, 3000);

// setInterval -
// setInterval(() => {
//   console.log("Hello");
// }, 2000);

let center = document.querySelector(".center");
let bar = document.querySelector(".inner-bar");
let count = document.querySelector(".btn h2");
let btn = document.querySelector(".btn button");
let time = document.querySelector(".time");
let flag = 0;

btn.addEventListener("click", () => {
  btn.style.pointerEvents = "none";
  btn.style.backgroundColor = "rgb(119, 173, 119)";

  let num = 50 + Math.floor(Math.random() * 51);

  let time = document.createElement("h2");
  time.innerHTML = `The file will be downloaded in ${num / 10} seconds`;
  center.appendChild(time);

  let int = setInterval(() => {
    flag++;
    bar.style.width = flag + "%";
    count.innerHTML = flag + "%";
  }, num);

  setTimeout(() => {
    clearInterval(int);
    btn.innerHTML = "Downloaded";
  }, num * 100);
});
