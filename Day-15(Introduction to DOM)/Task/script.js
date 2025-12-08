let inc = document.querySelector(".inc");
let dec = document.querySelector(".dec");
let rst = document.querySelector(".rst");
let h1 = document.querySelector("h1");

let flag = 0;

inc.addEventListener("click", function () {
  flag++;
  h1.innerHTML = flag;
});

dec.addEventListener("click", function () {
  flag--;
  h1.innerHTML = flag;
});

rst.addEventListener("click", function () {
  flag = 0;
  h1.innerHTML = flag;
});
