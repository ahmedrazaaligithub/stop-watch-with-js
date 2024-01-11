var tens = 00;
var sec = 00;
var hours =00;
var mins =00;
let outputhours = document.getElementById("hours")
let outputmins = document.getElementById("mins")
let outputSeconds = document.getElementById("seconds")
let outputTens = document.getElementById("tens")
var btnstart = document.getElementById("btnStart")
var btnstop = document.getElementById("btnStop")
var btnrestart = document.getElementById("btnRestart")
var interval;


btnstart.addEventListener( "click",() => {
    clearInterval(interval);
    interval= setInterval(startTime,10)
});


btnstop.addEventListener("click",() => {
clearInterval(interval);
});
btnrestart.addEventListener("click",() => {
    sec = "00";
    tens = "00";
    mins = "00";
    hours = "00";
    outputhours.innerHTML = hours
    outputmins.innerHTML = mins;
    outputSeconds.innerHTML = sec;
    outputTens.innerHTML = tens;
    clearInterval(interval);

    });

    
    function startTime(){
        tens++;
        if(tens<= 9){
            outputTens.innerHTML = "0" + tens;
        }
        if(tens > 9){
        outputTens.innerHTML = tens;
        }
        if(tens > 99){
            sec++;
            outputSeconds.innerHTML ="0"+ sec;
            tens=0;
            outputTens.innerHTML=tens
        }
        if(sec > 9){
            outputSeconds.innerHTML = sec;
        } 
        if(sec > 59){
            mins++
            outputmins.innerHTML = "0" + mins;
            sec = 00
            outputSeconds.innerHTML = sec
        }
        if (mins > 9){
            outputmins.innerHTML = mins
        }
        if (mins > 59){
            hours++;
            outputhours.innerHTML = "0" + hours;
            mins = 00;
            outputmins.innerHTML = mins
        }
    }




