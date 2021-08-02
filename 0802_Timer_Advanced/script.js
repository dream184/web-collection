const timer = document.querySelector(".timer");
const bar = document.querySelector(".progress-bar");

let timerStart = false;
let timeStop = false;

let keyInTime = 0;
let totalTime = keyInTime * 60; // 總秒數
let minutes = Math.floor(totalTime / 60);
let seconds = Math.floor(totalTime % 60);

let timeArray = [`${minutes}`, `${seconds}`];
let timeFormat = timeArray.map((e) => {
  if (e.length < 2) {
    return (e = `0${e}`);
  } else {
    return e;
  }
});

const render = () => { timer.textContent = `${timeFormat[0]} : ${timeFormat[1]}` }

document.addEventListener("keydown", (e) => {
  console.log(e.keyCode);
  if (e.keyCode === 13 && !timerStart) {
    timerStart = true;
    setTimer();

    // timer.textContent = `${timeFormat[0]} : ${timeFormat[1]}`;
    render()
    console.log("start");
    console.log(timeArray);
  } else if (e.keyCode === 13 && timerStart) {
    timerStart = false;
    setTimer(0)
    render()
  }

  if (e.keyCode === 32 && !timeStop) {
    timeStop = true;
    console.log("stop");
  } else if (e.keyCode === 32 && timeStop) {
    timeStop = false;
    console.log("continue");
  }
});



function setTimer(number = 2) {
  keyInTime = number;
  totalTime = keyInTime * 60; // 總秒數
  minutes = Math.floor(totalTime / 60);
  seconds = Math.floor(totalTime % 60);
  timeArray[0] = `${minutes}`;
  timeArray[1] = `${seconds}`;
  timeFormat = timeArray.map((e) => {
    if (e.length < 2) {
      return (e = `0${e}`);
    } else {
      return e;
    }
  });
}
