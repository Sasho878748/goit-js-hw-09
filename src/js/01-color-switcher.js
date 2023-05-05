const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

// console.log(startBtn);
const body = document.body;

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function startChangingColor() {
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
}

function stopChangingColor() {
  clearInterval(intervalId);
  startBtn.disabled = false;
}

startBtn.addEventListener("click", startChangingColor);
stopBtn.addEventListener("click", stopChangingColor);
