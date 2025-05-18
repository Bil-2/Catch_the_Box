const box = document.getElementById("box");
const gameArea = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("startBtn");

let score = 0;
let time = 30;
let gameInterval, timerInterval;

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function showBox() {
  const maxX = gameArea.clientWidth - 60;
  const maxY = gameArea.clientHeight - 60;
  box.style.left = random(0, maxX) + "px";
  box.style.top = random(0, maxY) + "px";
  const hue = random(0, 360);
  box.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
  box.style.boxShadow = `0 0 15px hsl(${hue}, 100%, 50%)`;
  box.style.display = "block";
}

box.onclick = () => {
  score++;
  scoreDisplay.textContent = score;
  showBox();
};

function startGame() {
  score = 0;
  time = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = time;
  startBtn.disabled = true;
  box.style.display = "block";

  showBox();
  gameInterval = setInterval(showBox, 1000);
  timerInterval = setInterval(() => {
    time--;
    timeDisplay.textContent = time;
    if (time <= 0) {
      clearInterval(gameInterval);
      clearInterval(timerInterval);
      box.style.display = "none";
      startBtn.disabled = false;
      alert("🎮 Game Over! Your score: " + score);
    }
  }, 1000);
}

startBtn.onclick = startGame;
