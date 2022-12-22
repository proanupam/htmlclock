const currentTime = document.querySelector(".time-output");


let updateClock = setInterval(timeFunc,1000);

function timeFunc(){
    let myTime = new Date();
    currentTime.textContent = myTime.getHours() + "-" + myTime.getMinutes() + "-" + myTime.getSeconds();
}

updateClock();