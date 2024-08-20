const body = document.getElementsByTagName("body")[0];
const border = document.getElementsByTagName("div")[0];
for (let i = 0; i < 9; i++) {
  let image = document.createElement("div");
  image.style.backgroundImage = "url(./pipe.png)";
  image.style.backgroundSize = "cover";
  image.style.width = "11vw";
  image.style.height = "20vh";
  image.style.display = "flex";
  image.style.justifyContent = "center";
  image.id = i.toString();
  document.getElementById("border").appendChild(image);
  border.appendChild(image);
}

function RandomMonty() {
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

let pic = document.createElement("img");
pic.src = "monty-mole.png";
pic.style.width = "8vw";
pic.style.height = "15vh";

function monty() {
  const randomNumber = RandomMonty();
  const selectedElement = document.getElementById(randomNumber);
  if (selectedElement.childElementCount > 0) {
    return monty();
  }
  let mole = document.getElementById(randomNumber);
  mole.appendChild(pic);
}
let flower = document.createElement("img");
flower.src = "piranha-plant.png";
flower.style.width = "10vw";
flower.style.height = "12vh";

function piranha() {
  let random = RandomMonty();
  const selectedElement = document.getElementById(random);
  if (selectedElement.childElementCount > 0) {
    return piranha();
  }
  let plant = document.getElementById(random);
  plant.appendChild(flower);
}

setInterval(function play() {
  monty();
  piranha();
}, 1000);

const cElement = document.getElementById("score");
function score() {
  cElement.innerHTML = Number(cElement.innerHTML) + 10;
}
pic.onclick = score;

flower.onclick = gameOver;

function gameOver() {
  const i = alert("       GAME OVER");
  const a = alert("            PLAY AGAIN");
  cElement.innerHTML = "0";
}
