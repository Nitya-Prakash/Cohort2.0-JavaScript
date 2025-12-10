// Guessing IPL 2026 winning team
let teams = [
  {
    team: "CSK",
    captain: "Ruturaj Gaikwad",
    trophies: 5,
    primaryColor: "yellow",
    secondaryColor: "blue",
    textColor: "white",
  },
  {
    team: "MI",
    captain: "Hardik Pandya",
    trophies: 5,
    primaryColor: "blue",
    secondaryColor: "gold",
    textColor: "black",
  },
  {
    team: "RCB",
    captain: "Rajat Patidar",
    trophies: 1,
    primaryColor: "red",
    secondaryColor: "black",
    textColor: "white",
  },
  {
    team: "KKR",
    captain: "Ajinkya Rahane",
    trophies: 3,
    primaryColor: "purple",
    secondaryColor: "gold",
    textColor: "black",
  },
  {
    team: "SRH",
    captain: "Pat Cummins",
    trophies: 1,
    primaryColor: "orangered",
    secondaryColor: "black",
    textColor: "white",
  },
  {
    team: "PBKS",
    captain: "Shreyas Iyer",
    trophies: 0,
    primaryColor: "crimson",
    secondaryColor: "grey",
    textColor: "white",
  },
  {
    team: "DC",
    captain: "Axar patel",
    trophies: 0,
    primaryColor: "darkblue",
    secondaryColor: "red",
    textColor: "black",
  },
  {
    team: "RR",
    captain: "Ravindra Jadeja",
    trophies: 1,
    primaryColor: "pink",
    secondaryColor: "blue",
    textColor: "white",
  },
  {
    team: "GT",
    captain: "Shubman Gill",
    trophies: 1,
    primaryColor: "darkblue",
    secondaryColor: "gold",
    textColor: "black",
  },
  {
    team: "LSG",
    captain: "Rishab Pant",
    trophies: 0,
    primaryColor: "skyblue",
    secondaryColor: "orange",
    textColor: "black",
  },
];

let box = document.querySelector("#box");
let btn = document.querySelector("button");
let main = document.querySelector("main");

btn.addEventListener("click", () => {
  let num = Math.floor(Math.random() * teams.length);
  box.innerHTML = `<h2 class="title">2026 IPL WINNER</h2>
        <h2 class="title">${teams[num].team}</h2>
        <h3 class="desc">Captain - ${teams[num].captain}</h3>
        <h3 class="desc">Trophies - ${teams[num].trophies}</h3>`;
  main.style.backgroundColor = teams[num].primaryColor;
  box.style.backgroundColor = teams[num].secondaryColor;

  let h2 = document.querySelectorAll(".title");
  let h3 = document.querySelectorAll(".desc");

  h2.forEach((val) => {
    val.style.color = teams[num].textColor;
  });
  h3.forEach((val) => {
    val.style.color = teams[num].textColor;
  });
});
