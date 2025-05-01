const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


function DigitalTimer() {
  const now = new Date();
  let hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  console.log(hour, minute, second)

  hour = hour > 12 ? hour - 12 : hour;
  
  hours.textContent = hour < 10 ? '0' + hour : hour;
  
  minutes.textContent = minute < 10 ? '0' + minute : minute;
  seconds.textContent = second < 10 ? '0' + second : second;
  setTimeout(DigitalTimer, 1000);
  
}

DigitalTimer()