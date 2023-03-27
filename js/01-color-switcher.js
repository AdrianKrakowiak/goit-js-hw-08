function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.getElementsByTagName("body");
const startButton = document.querySelector("[data-start]");
const stopButton = document.querySelector("[data-stop]");
console.log(body);

function changeBg() {
  console.log(document.body);
  document.body.style.backgroundColor = getRandomColor();
}

let interval;
const startButtonClick = (event) => {
  interval = setInterval(changeBg, 1000);
  startButton.disabled = true;
};

const stopButtonClick = (event) => {
  if (interval != null) clearInterval(interval);
  interval = null;
  startButton.disabled = false;
};
startButton.addEventListener("click", startButtonClick);
stopButton.addEventListener("click", stopButtonClick);
