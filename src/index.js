const timetable = require('./assets/timetable');
//Selectors
//initial date capture
const date = new Date();
const month = date.getMonth();
const day = date.getDate();
//DOM Elements
const dateH3 = document.querySelector('h3');
const clock = document.querySelector('#clock');
//selecting rows for class and appearance change
const rowFajr = document.querySelector('tr:nth-of-type(2)');
const rowSunrise = document.querySelector('tr:nth-of-type(3)');
const rowDhuhr = document.querySelector('tr:nth-of-type(4)');
const rowAsr = document.querySelector('tr:nth-of-type(5)');
const rowMaghrib = document.querySelector('tr:nth-of-type(6)');
const rowIsha = document.querySelector('tr:nth-of-type(7)');
//selecting times from first column of timetable
const fajr = document.querySelector('.fajr');
const sunrise = document.querySelector('.sunrise');
const dhuhr = document.querySelector('.dhuhr');
const asr = document.querySelector('.asr');
const maghrib = document.querySelector('.maghrib');
const isha = document.querySelector('.isha');
//selecting times from second column of timetable
const fJam = document.querySelector('.F-Jam');
const dJam = document.querySelector('.D-Jam');
const aJam = document.querySelector('.A-Jam');
const mJam = document.querySelector('.M-Jam');
const iJam = document.querySelector('.I-Jam');
//selecting button
const btn = document.querySelector('#tomorrows-times');
//selecting times from 1st column of 'tomorrow' table
const tfajr = document.querySelector('.tfajr');
const tsunrise = document.querySelector('.tsunrise');
const tdhuhr = document.querySelector('.tdhuhr');
const tasr = document.querySelector('.tasr');
const tmaghrib = document.querySelector('.tmaghrib');
const tisha = document.querySelector('.tisha');
////selecting times from 2nd column of 'tomorrow' table
const tfJam = document.querySelector('.tF-Jam');
const tdJam = document.querySelector('.tD-Jam');
const taJam = document.querySelector('.tA-Jam');
const tmJam = document.querySelector('.tM-Jam');
const tiJam = document.querySelector('.tI-Jam');
//
const tomoz = document.getElementById('tomoz');
const today = document.getElementById('today');
//buttons under table
const nEnabled = document.querySelector('.nEnabled');
const nSilenced = document.querySelector('.nSilenced');
const nOff = document.querySelector('.nOff');
//time from timetable object '13:54'
const getDay = timetable[month][day];
const fTimetable = getDay.fajr;
const fJamTimetable = getDay.fajrJamaa;
const sTimetable = getDay.sunrise;
const dTimetable = getDay.dhuhr;
const dJamTimetable = getDay.dhuhrJamaa;
const aTimetable = getDay.asr;
const aJamTimetable = getDay.asrJamaa;
const mTimetable = getDay.maghrib;
const mJamTimetable = getDay.maghribJamaa;
const iTimetable = getDay.isha;
const iJamTimetable = getDay.ishaJamaa;
//next day times + optional chaining check for last day of month + 1

const correctedDay = timetable[month]?.[day + 1]; //Looks for 31st of month
const rectifiedDay = timetable[month + 1][1]; // Looks for next month;
const endOfYearRectifier = timetable[0][1]; //for day after last day of year (no 13th month)
const tomFTimetable = correctedDay?.fajr;
const tomFJamTimetable = correctedDay?.fajrJamaa;
const tomSTimetable = correctedDay?.sunrise;
const tomDTimetable = correctedDay?.dhuhr;
const tomDJamTimetable = correctedDay?.dhuhrJamaa;
const tomATimetable = correctedDay?.asr;
const tomAJamTimetable = correctedDay?.asrJamaa;
const tomMTimetable = correctedDay?.maghrib;
const tomMJamTimetable = correctedDay?.maghribJamaa;
const tomITimetable = correctedDay?.isha;
const tomIJamTimetable = correctedDay?.ishaJamaa;
//string with colon taken out for time comparison '1354'
const fTime = fTimetable.replace(':', '');
const sTime = sTimetable.replace(':', '');
const dTime = dTimetable.replace(':', '');
const aTime = aTimetable.replace(':', '');
const mTime = mTimetable.replace(':', '');
const iTime = iTimetable.replace(':', '');
//Colon removed string converted to number
const f = parseInt(fTime);
const s = parseInt(sTime);
const d = parseInt(dTime);
const a = parseInt(aTime);
const mg = parseInt(mTime);
const i = parseInt(iTime);
//Event listeners
btn.addEventListener('mousedown', tomorrowTimes);
btn.addEventListener('mouseup', todayTimes);
nEnabled.addEventListener('mousedown', permitNotifications);
nSilenced.addEventListener('mousedown', silenceNotifications);
nOff.addEventListener('mousedown', stopNotifications);

//Functions
const getPrayerTimes = () => {
  fajr.innerText = fTimetable;
  fJam.innerText = fJamTimetable;
  sunrise.innerText = sTimetable;
  dhuhr.innerText = dTimetable;
  dJam.innerText = dJamTimetable;
  asr.innerText = aTimetable;
  aJam.innerText = aJamTimetable;
  maghrib.innerText = mTimetable;
  mJam.innerText = mJamTimetable || mTimetable;
  isha.innerText = iTimetable;
  iJam.innerText = iJamTimetable;
};
//changes styling of table and notifies of prayer time upon active class assignment
function timeDifference() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let sec = date.getSeconds();
  h = checkZero(h);
  m = checkZero(m);
  sec = checkZero(sec);
  const nCheckF = fTimetable + ':00';
  const nCheckD = dTimetable + ':00';
  const nCheckA = aTimetable + ':00';
  const nCheckM = mTimetable + ':00';
  const nCheckI = iTimetable + ':00';

  const currentTime = h + '' + m;
  const cT = parseInt(currentTime);
  const accurateCT = h + ':' + m + ':' + sec;

  if (cT >= f && cT < s) {
    if (accurateCT === nCheckF) notify('Fajr');
    rowFajr.classList.add('active');
  } else if (cT >= s && cT < d) {
    changeActiveClass(rowFajr, rowSunrise);
  } else if (cT >= d && cT < a) {
    if (accurateCT === nCheckD) notify('Dhuhr');
    changeActiveClass(rowSunrise, rowDhuhr);
  } else if (cT >= a && cT < mg) {
    if (accurateCT === nCheckA) notify('Asr');
    changeActiveClass(rowDhuhr, rowAsr);
  } else if (cT >= mg && cT < i) {
    if (accurateCT === nCheckM) notify('Maghrib');
    changeActiveClass(rowAsr, rowMaghrib);
  } else if (cT >= i && cT <= 2359) {
    if (accurateCT === nCheckI) notify('Isha');
    changeActiveClass(rowMaghrib, rowIsha);
  } else if (!cT) {
    rowIsha.classList.remove('active');
  }
}
function changeActiveClass(rowRemove, rowAdd) {
  rowRemove.classList.remove('active');
  rowAdd.classList.add('active');
}
//gets and sets clock
function currentTime() {
  let date = new Date(); /* creating object of Date class */
  let hour = date.getHours();
  let mi = date.getMinutes();
  let sec = date.getSeconds();
  hour = checkZero(hour);
  mi = checkZero(mi);
  sec = checkZero(sec);
  clock.innerText = hour + ':' + mi + ':' + sec; /* adding time to the div */
  if (hour + ':' + mi + ':' + sec === '00:00:00') {
    setDate();
    getPrayerTimes();
  }
}
//adds zero to minute/hour/sec below 10
function checkZero(num) {
  if (num < 10) {
    return '0' + num;
  } else {
    return num;
  }
}
function run() {
  currentTime();
  timeDifference();
  setTimeout(function () {
    run();
  }, 1000); /* setting timer*/
}

function tomorrowTimes() {
  today.style.left = '110%';
  tomoz.style.transform = 'translate(-50%,0)';
  tomoz.style.left = '50%';

  tfajr.innerText =
    tomFTimetable || rectifiedDay?.fajr || endOfYearRectifier.fajr;
  tfJam.innerText =
    tomFJamTimetable || rectifiedDay?.fajrJamaa || endOfYearRectifier.fajrJamaa;
  tsunrise.innerText =
    tomSTimetable || rectifiedDay?.sunrise || endOfYearRectifier.sunrise;
  tdhuhr.innerText =
    tomDTimetable || rectifiedDay?.dhuhr || endOfYearRectifier.dhuhr;
  tdJam.innerText =
    tomDJamTimetable ||
    rectifiedDay?.dhuhrJamaa ||
    endOfYearRectifier.dhuhrJamaa;
  tasr.innerText = tomATimetable || rectifiedDay?.asr || endOfYearRectifier.asr;
  taJam.innerText =
    tomAJamTimetable || rectifiedDay?.asrJamaa || endOfYearRectifier.asrJamaa;
  tmaghrib.innerText =
    tomMTimetable || rectifiedDay?.maghrib || endOfYearRectifier.maghrib;
  tmJam.innerText =
    tomMJamTimetable ||
    rectifiedDay?.maghribJamaa ||
    endOfYearRectifier?.maghribJamaa ||
    tomMTimetable ||
    rectifiedDay?.maghrib ||
    endOfYearRectifier.maghrib;
  tisha.innerText =
    tomITimetable || rectifiedDay?.isha || endOfYearRectifier.isha;
  tiJam.innerText =
    tomIJamTimetable || rectifiedDay?.ishaJamaa || endOfYearRectifier.ishaJamaa;
}
function todayTimes() {
  tomoz.style.left = '-110%';
  today.style.left = '0%';
}

function setDate() {
  const date = new Date();
  dateH3.innerText = date.toDateString();
}
function notify(pName) {
  if (Notification.permission === 'granted') {
    if (
      nEnabled.classList.contains('pressed') &&
      !nSilenced.classList.contains('pressed')
    ) {
      notification = new Notification(`Time for ${pName} prayer`, {
        body: `The time for ${pName} prayer has started.`,
        soundName: 'default',
      });
    } else if (nSilenced.classList.contains('pressed')) {
      notification = new Notification(`Time for ${pName} prayer`, {
        body: `The time for ${pName} prayer has started.`,
        silent: true,
      });
    } else if (nOff.classList.contains('pressed')) {
    }
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission();
  }
}

function permitNotifications() {
  nEnabled.classList.toggle('pressed');
  nOff.classList.remove('pressed');
  if (!nEnabled.classList.contains('pressed')) {
    nOff.classList.add('pressed');
    nSilenced.classList.remove('pressed');
  }
}
function stopNotifications() {
  nOff.classList.toggle('pressed');
  nEnabled.classList.remove('pressed');
  nSilenced.classList.remove('pressed');
  if (!nOff.classList.contains('pressed')) {
    nEnabled.classList.add('pressed');
  }
}
function silenceNotifications() {
  nEnabled.classList.add('pressed');
  nSilenced.classList.toggle('pressed');
  nOff.classList.remove('pressed');
  if (!nSilenced.classList.contains('pressed')) {
    nEnabled.classList.add('pressed');
  }
}
function notificationPermission() {
  if (
    Notification.permission != 'granted' &&
    Notification.permission != 'denied'
  ) {
    Notification.requestPermission();
  }
}
notificationPermission();
setDate();
getPrayerTimes();
run();
