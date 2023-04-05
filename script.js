
let p = document.querySelector(".time");
      





let [seconds, minutes, hours] = [0, 0, 0];
let time = document.querySelector(".time1");
time.innerHTML = "00:00:00";
let int = null;
let btns = document.querySelectorAll("button");
btns[1].disabled = true;
btns[2].disabled = true;
btns[0].addEventListener("click", () => {
    btns[0].disabled = true;
    btns[1].disabled = false;
btns[2].disabled = false;
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 1000);
});

btns[1].addEventListener("click", () => {
    if(btns[1].innerText ==="pause"){
        clearInterval(int);
      }
      else{
        int = setInterval(displayTimer,1000)
      }

  console.log(btns[1].innerText)
  btns[1].innerText ==="continue"?btns[1].innerText ="pause":btns[1].innerText ="continue";
  

});

btns[2].addEventListener("click", () => {
  clearInterval(int);
  [seconds, minutes, hours] = [0, 0, 0];
  time.innerHTML = "00:00:00";
  btns[0].disabled = false;
    btns[1].disabled = true;
btns[2].disabled = true;
});

function displayTimer(){

  seconds += 01;
  if(seconds == 60){
      seconds = 00;
      minutes += 01;
      if(minutes == 60){
          minutes = 00;
          hours +=01;
      }
  }
  if(seconds<10){
  time.innerHTML = `0${hours}:0${minutes}:0${seconds}`;
  
  }
  else{
    time.innerHTML = `0${hours}:0${minutes}:${seconds}`;

  }
}

