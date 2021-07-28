const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setTimeout(getClock, 5000);
// getClock함수를 5000ms 후에 실행함.

getClock();
setInterval(getClock, 1000);
// getClock함수를 1000ms의 간격으로 실행함.
