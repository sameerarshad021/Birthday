let hours = 11;
let minutes = 59;
let seconds = 55;
let ampm = "PM";

function updateFakeClock() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  if (hours === 12 && minutes === 0 && seconds === 0 && ampm === "PM") {
    ampm = "AM";
    showBirthday();
  }

  if (hours === 13) {
    hours = 1;
  }

  document.getElementById("clock").innerHTML =
    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
}

function showBirthday() {
  document.getElementById("date").innerHTML = "3 January 2026";
  document.getElementById("birthday").style.display = "block";
  document.getElementById("calendar").style.display = "grid";
  document.getElementById("event").style.display = "block";
}

function createCalendar() {
  const calendar = document.getElementById("calendar");
  for (let i = 1; i <= 31; i++) {
    const div = document.createElement("div");
    div.className = "day";
    div.innerText = i;
    if (i === 3) {
      div.classList.add("marked");
    }
    calendar.appendChild(div);
  }
}

createCalendar();
setInterval(updateFakeClock, 1000);