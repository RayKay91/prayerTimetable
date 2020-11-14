//Selectors
//initial date capture
//DOM Elements
const dateH3 = document.querySelector("h3");
const clock = document.querySelector("#clock");
//selecting rows for class and appearance change
const rowFajr = document.querySelector("tr:nth-of-type(2)");
const rowSunrise = document.querySelector("tr:nth-of-type(3)");
const rowDhuhr = document.querySelector("tr:nth-of-type(4)");
const rowAsr = document.querySelector("tr:nth-of-type(5)");
const rowMaghrib = document.querySelector("tr:nth-of-type(6)");
const rowIsha = document.querySelector("tr:nth-of-type(7)");
//selecting times from first column of timetable
const fajr = document.querySelector(".fajr");
const sunrise = document.querySelector(".sunrise");
const dhuhr = document.querySelector(".dhuhr");
const asr = document.querySelector(".asr");
const maghrib = document.querySelector(".maghrib");
const isha = document.querySelector(".isha");
//selecting times from second column of timetable
const fJam = document.querySelector(".F-Jam");
const dJam = document.querySelector(".D-Jam");
const aJam = document.querySelector(".A-Jam");
const mJam = document.querySelector(".M-Jam");
const iJam = document.querySelector(".I-Jam");
//selecting button

//buttons under table
const nEnabled = document.querySelector(".nEnabled");
const nSilenced = document.querySelector(".nSilenced");
const nOff = document.querySelector(".nOff");

const getTimes = require("./scraperFunc");

getTimes().then((times) => {
  const fajr = times[0][0];
  const sunrise = times[0][1];
  const dhuhr = times[0][2];
  const asr = times[0][3];
  const maghrib = times[0][4];
  const isha = times[0][5];
  const fajrJamaa = times[1][0];
  const dhuhrJamaa = times[1][1];
  const asrJamaa = times[1][2];
  const maghribJamaa = times[1][3];
  const ishaJamaa = times[1][4];

  setPrayerTimes(
    fajr,
    sunrise,
    dhuhr,
    asr,
    maghrib,
    isha,
    fajrJamaa,
    dhuhrJamaa,
    asrJamaa,
    maghribJamaa,
    ishaJamaa
  );

  const fTime = fajr;
  const sTime = sunrise;
  const dTime = convertTo24Hr(dhuhr);
  const aTime = convertTo24Hr(asr);
  const mTime = convertTo24Hr(maghrib);
  const iTime = convertTo24Hr(isha);

  timeDifference(fTime, sTime, dTime, aTime, mTime, iTime);
  function run() {
    currentTime();
    const shouldUpdateTimes = currentTime();

    shouldUpdateTimes
      ? setPrayerTimes(
          fajr,
          sunrise,
          dhuhr,
          asr,
          maghrib,
          isha,
          fajrJamaa,
          dhuhrJamaa,
          asrJamaa,
          maghribJamaa,
          ishaJamaa
        )
      : "";

    timeDifference(fTime, sTime, dTime, aTime, mTime, iTime);
    setTimeout(function () {
      run();
    }, 1000); /* setting timer*/
  }
  run();
});

//Event listeners
nEnabled.addEventListener("mousedown", permitNotifications);
nSilenced.addEventListener("mousedown", silenceNotifications);
nOff.addEventListener("mousedown", stopNotifications);

//Functions
const setPrayerTimes = (
  Fajr,
  Sunrise,
  Dhuhr,
  Asr,
  Maghrib,
  Isha,
  FajrJamaa,
  DhuhrJamaa,
  AsrJamaa,
  MaghribJamaa,
  IshaJamaa
) => {
  fajr.innerText = Fajr;
  fJam.innerText = FajrJamaa;
  sunrise.innerText = Sunrise;
  dhuhr.innerText = convertTo24Hr(Dhuhr);
  dJam.innerText = convertTo24Hr(DhuhrJamaa);
  asr.innerText = convertTo24Hr(Asr);
  aJam.innerText = convertTo24Hr(AsrJamaa);
  maghrib.innerText = convertTo24Hr(Maghrib);
  mJam.innerText = convertTo24Hr(MaghribJamaa);
  isha.innerText = convertTo24Hr(Isha);
  iJam.innerText = convertTo24Hr(IshaJamaa);
};
//changes styling of table and notifies of prayer time upon active class assignment
function timeDifference(fTime, sTime, dTime, aTime, mTime, iTime) {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let sec = date.getSeconds();
  h = checkZero(h);
  m = checkZero(m);
  sec = checkZero(sec);
  const nCheckF = fTime + ":00";
  const nCheckD = dTime + ":00";
  const nCheckA = aTime + ":00";
  const nCheckM = mTime + ":00";
  const nCheckI = iTime + ":00";

  const currentTime = parseInt(h + "" + m);

  const accurateCurrentTime = h + ":" + m + ":" + sec;

  const fajrTime = +fTime.replace(":", "");
  const sunrisetime = +sTime.replace(":", "");
  const dhuhrTime = +dTime.replace(":", "");
  const asrTime = +aTime.replace(":", "");
  const maghribTime = +mTime.replace(":", "");
  const ishaTime = +iTime.replace(":", "");

  if (currentTime >= fajrTime && currentTime < sunrisetime) {
    if (accurateCurrentTime === nCheckF) notify("Fajr");
    rowFajr.classList.add("active");
  } else if (currentTime >= sunrisetime && currentTime < dhuhrTime) {
    changeActiveClass(rowFajr, rowSunrise);
  } else if (currentTime >= dhuhrTime && currentTime < asrTime) {
    if (accurateCurrentTime === nCheckD) notify("Dhuhr");
    changeActiveClass(rowSunrise, rowDhuhr);
  } else if (currentTime >= asrTime && currentTime < maghribTime) {
    if (accurateCurrentTime === nCheckA) notify("Asr");
    changeActiveClass(rowDhuhr, rowAsr);
  } else if (currentTime >= maghribTime && currentTime < ishaTime) {
    if (accurateCurrentTime === nCheckM) notify("Maghrib");
    changeActiveClass(rowAsr, rowMaghrib);
  } else if (currentTime >= ishaTime && currentTime <= 2359) {
    if (accurateCurrentTime === nCheckI) notify("Isha");
    changeActiveClass(rowMaghrib, rowIsha);
  } else if (!currentTime) {
    rowIsha.classList.remove("active");
  }
}
function changeActiveClass(rowRemove, rowAdd) {
  rowRemove.classList.remove("active");
  rowAdd.classList.add("active");
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
  clock.innerText = hour + ":" + mi + ":" + sec; /* adding time to the div */
  if (hour + ":" + mi + ":" + sec === "00:00:00") {
    setDate();
    return true;
  }
  return false;
}
//adds zero to minute/hour/sec below 10
function checkZero(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

//converted to number for time comparison

function convertTo24Hr(time) {
  //check if hour is 12 or 11 if so do not add 12
  if (time[1] === "2" || time.substring(0, 2) === "11") return time;

  if (time[0] !== "0") {
    time = "0" + time;
  }
  let hours = time.substring(0, 2);

  hours = parseInt(hours) + 12;
  return hours + time.substring(2);
}

function setDate() {
  const date = new Date();
  dateH3.innerText = date.toDateString();
}

function notify(pName) {
  if (Notification.permission === "granted") {
    if (
      nEnabled.classList.contains("pressed") &&
      !nSilenced.classList.contains("pressed")
    ) {
      new Notification(`Time for ${pName} prayer`, {
        body: `The time for ${pName} prayer has started.`,
        soundName: "default",
      });
    } else if (nSilenced.classList.contains("pressed")) {
      new Notification(`Time for ${pName} prayer`, {
        body: `The time for ${pName} prayer has started.`,
        silent: true,
      });
    } else if (nOff.classList.contains("pressed")) {
    }
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission();
  }
}

function permitNotifications() {
  nEnabled.classList.toggle("pressed");
  nOff.classList.remove("pressed");
  if (!nEnabled.classList.contains("pressed")) {
    nOff.classList.add("pressed");
    nSilenced.classList.remove("pressed");
  }
}
function stopNotifications() {
  nOff.classList.toggle("pressed");
  nEnabled.classList.remove("pressed");
  nSilenced.classList.remove("pressed");
  if (!nOff.classList.contains("pressed")) {
    nEnabled.classList.add("pressed");
  }
}
function silenceNotifications() {
  nEnabled.classList.add("pressed");
  nSilenced.classList.toggle("pressed");
  nOff.classList.remove("pressed");
  if (!nSilenced.classList.contains("pressed")) {
    nEnabled.classList.add("pressed");
  }
}
function notificationPermission() {
  if (
    Notification.permission !== "granted" &&
    Notification.permission !== "denied"
  ) {
    Notification.requestPermission();
  }
}
notificationPermission();
setDate();
