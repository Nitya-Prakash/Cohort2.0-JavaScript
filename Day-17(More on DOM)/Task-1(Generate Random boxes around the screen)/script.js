let main = document.querySelector("main");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let div = document.createElement("div");

  let x = Math.floor(Math.random() * 100);
  let y = Math.floor(Math.random() * 100);
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);
  let rotate = Math.floor(Math.random() * 360);

  div.style.height = "100px";
  div.style.width = "100px";
  div.style.borderRadius = "10px";
  div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
  div.style.position = "absolute";
  div.style.left = x + "%";
  div.style.top = y + "%";
  div.style.rotate = rotate + "deg";

  main.appendChild(div);
});
