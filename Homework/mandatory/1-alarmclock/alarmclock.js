

function setAlarm() {
  const alarmSet = document.querySelector("#alarmSet");
  const timeRemaining = document.querySelector("#timeRemaining");

  timeRemaining.innerHTML = alarmSet.value;
   var countdown = setInterval(function(){
    timeRemaining.innerHTML--;
     if(timeRemaining.innerHTML === "0") {
       clearInterval(countdown);
       playAlarm();
     }  
  },1000)
}



// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
