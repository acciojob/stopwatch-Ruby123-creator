//your code here

let p = document.querySelector(".time");
      
function clock() {
  let date_time = new Date();
  let hr = date_time.getHours();
  let min = date_time.getMinutes();
  let sec = date_time.getSeconds();
  let date = date_time.getDate();
  count++;
  p.innerHTML = `${hr}:${min}:${sec}:${date}`;
}




let [seconds, minutes, hours] = [0, 0, 0];
let time = document.querySelector(".time1");
time.innerHTML = " 00 : 00 : 00";
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
  time.innerHTML = "00 : 00 : 00 ";
  btns[0].disabled = false;
    btns[1].disabled = true;
btns[2].disabled = true;
});

function displayTimer(){

  seconds++;
  if(seconds == 60){
      seconds = 0;
      minutes++;
      if(minutes == 60){
          minutes = 0;
          hours++;
      }
  }

  time.innerHTML = `${hours}:${minutes}:${seconds}`;
}

