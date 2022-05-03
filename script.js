let workMin = document.getElementById("w-min");
let workSec = document.getElementById("w-sec");
let breakMin = document.getElementById("b-min");
let breakSec = document.getElementById("b-sec");
let cycle = document.getElementById("cycle_0");

let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");
let resetButton = document.getElementById("reset");

const timer = () => {
  if (workSec.innerText != 0) {
    workSec.innerText--;
  } else if (workSec.innerText == 0 && workMin.innerText != 0) {
    workSec.innerText = 59;
    workMin.innerText--;
  }
  if (workSec.innerText == 0 && workMin.innerText == 0) {
    if (breakSec.innerText != 0) {
      breakSec.innerText--;
    } else if (breakSec.innerText == 0 && breakMin.innerText != 0) {
      breakSec.innerText = 59;
      breakMin.innerText--;
    }
  }
  if (
    workMin.innerText == 0 &&
    workSec.innerText == 0 &&
    breakMin.innerText == 0 &&
    breakSec.innerText == 0
  ) {
    workMin.innerText = 25;
    workSec.innerText = "00";

    breakMin.innerText = 05;
    breakSec.innerText = "00";

    cycle.innerText++;
  }
};

let start = undefined;

startButton.addEventListener("click", () => {
  if (start === undefined) {
    start = setInterval(timer, 1000);
  }
});

resetButton.addEventListener("click", () => {
  workMin.innerText = 25;
  workSec.innerText = "00";

  breakMin.innerText = 05;
  breakSec.innerText = "00";

  cycle.innerText = 0;

  clearInterval(start);
  start = undefined;
});

pauseButton.addEventListener("click", () => {
  clearInterval(start);
  start = undefined;
});
