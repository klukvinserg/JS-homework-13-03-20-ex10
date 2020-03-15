let timeOne;

let hourOne;
let minutesOne;
let secondsOne;

for (; true; ) {
  timeOne = prompt("Get time 1 in format: hh:mm:ss");
  hourOne = +timeOne.slice(0, 2);
  minutesOne = +timeOne.slice(3, 5);
  secondsOne = +timeOne.slice(6, 8);

  if (
    timeOne[2] === ":" &&
    timeOne[5] === ":" &&
    timeOne.length === 8 &&
    !isNaN(hourOne) &&
    !isNaN(minutesOne) &&
    !isNaN(secondsOne) &&
    hourOne >= 0 &&
    hourOne <= 23 &&
    minutesOne >= 0 &&
    minutesOne <= 59 &&
    secondsOne >= 0 &&
    secondsOne <= 59
  ) {
    break;
  } else {
    alert("Incorrect");
    continue;
  }
}

let timeTwo;
let hourTwo;
let minutesTwo;
let secondsTwo;

for (; true; ) {
  timeTwo = prompt("Get time 2 in format: hh:mm:ss");

  hourTwo = +timeTwo.slice(0, 2);
  minutesTwo = +timeTwo.slice(3, 5);
  secondsTwo = +timeTwo.slice(6, 8);

  if (
    timeTwo[2] === ":" &&
    timeTwo[5] === ":" &&
    timeTwo.length === 8 &&
    !isNaN(hourTwo) &&
    !isNaN(minutesTwo) &&
    !isNaN(secondsTwo) &&
    hourTwo >= 0 &&
    hourTwo <= 23 &&
    minutesTwo >= 0 &&
    minutesTwo <= 59 &&
    secondsTwo >= 0 &&
    secondsTwo <= 59
  ) {
    break;
  } else {
    alert("Incorrect");
    continue;
  }
}

function timeResult(el1, el2, el3, el4, el5, el6) {
  let timeOneSeconds;
  let timeTwoSeconds;
  let tmp;
  let hours;
  let minutes;
  let seconds;
  timeOneSeconds = el1 * 3600 + el2 * 60 + el3;
  timeTwoSeconds = el4 * 3600 + el5 * 60 + el6;

  if (timeOneSeconds > timeTwoSeconds) {
    tmp = timeOneSeconds - timeTwoSeconds;

    hours = Math.trunc(tmp / 3600);
    minutes = Math.trunc((tmp - hours * 3600) / 60);
    seconds = tmp - hours * 3600 - minutes * 60;

    if (hours < 10) {
      hours = "0" + hours;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return hours + ":" + minutes + ":" + seconds;
  } else if (timeTwoSeconds > timeOneSeconds) {
    tmp = timeTwoSeconds - timeOneSeconds;

    hours = Math.trunc(tmp / 3600);
    minutes = Math.trunc((tmp - hours * 3600) / 60);
    seconds = tmp - hours * 3600 - minutes * 60;

    if (hours < 10) {
      hours = "0" + hours;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return hours + ":" + minutes + ":" + seconds;
  } else if (timeOneSeconds === timeTwoSeconds) {
    return "00:00:00";
  }
}

document.write(
  `Result: ${timeResult(
    hourOne,
    minutesOne,
    secondsOne,
    hourTwo,
    minutesTwo,
    secondsTwo
  )}`
);
