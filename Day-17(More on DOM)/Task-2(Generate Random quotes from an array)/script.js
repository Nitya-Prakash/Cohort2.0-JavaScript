let arr = [
  "Keep moving forward !",
  "Trust the process !",
  "Stay unapologetically you !",
  "Focus over noise !",
  "Discipline beats motivation !",
  "Own your choices !",
  "Work without excuses !",
  "Protect your peace !",
  "Consistency builds power !",
  "Make yourself proud !",
];

let main = document.querySelector("main");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let h1 = document.createElement("h1");
  let i = Math.floor(Math.random() * arr.length);
  h1.innerHTML = arr[i];

  let x = Math.floor(Math.random() * 100);
  let y = Math.floor(Math.random() * 100);
  let rotate = Math.floor(Math.random() * 360);

  h1.style.position = "absolute";
  h1.style.color = "white";
  h1.style.left = x + "%";
  h1.style.top = y + "%";
  h1.style.rotate = rotate + "deg";
  h1.style.whiteSpace = "nowrap";

  main.appendChild(h1);
});
