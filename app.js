let newYear = new Date(2023, 0, 1, 0, 0);
let newYearTime = newYear.getTime();

function calc() {
  let nowYear = new Date();

  // example 1
  let nowYearTime = nowYear.getTime();

  let time = newYearTime - nowYearTime;

  let oneDay = 24 * 60 * 60 * 1000;
  let oneHour = 60 * 60 * 1000;
  let oneMin = 60 * 1000;

  let days = Math.floor(time / oneDay);
  let hours = Math.floor((time % oneDay) / oneHour);
  let mins = Math.floor((time % oneHour) / oneMin);
  let secs = Math.floor((time % oneMin) / 1000);

  // example 2
  let time1 = (newYearTime - nowYearTime) / 1000;

  let days1 = Math.floor(time1 / 3600 / 24);
  let hours1 = Math.floor(time1 / 3600) % 24;
  let mins1 = Math.floor(time1 / 60) % 60;
  let secs1 = Math.floor(time1) % 60;

  // result 1
  console.log(`${days}  ${hours}  ${mins}  ${secs}`);
  // result 2
  console.log(`${days1}  ${hours1}  ${mins1}  ${secs1}`);
}

if(1 === 1) {
  calc();
}