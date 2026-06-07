document.addEventListener("DOMContentLoaded", () => {
  const currentDateElem = document.getElementById("currentDate");
  const liveClockElem = document.getElementById("liveClock");

  // Set current date
  const today = new Date();
  currentDateElem.textContent = today.toDateString();

  // Live clock
  setInterval(() => {
    const time = new Date();
    liveClockElem.textContent = time.toLocaleTimeString();
  }, 1000);

  // App initialization logic
  console.log("Attendance Management App Initialized");
});