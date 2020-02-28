"use strict";
/**
 * Exercise #9: Countdown timer
 */

let timeLeft = -1
let timer = null;
let title = null;

function init(){

    document.querySelector("form[name='countdown_form']").onsubmit = 
        function(event) {
            event.preventDefault();  // preventing the form from submission

            // get new title
            title = this.querySelector("#newtitle").value.toUpperCase();
            document.querySelector("#title").innerText = title;

            // set time left (seconds)
            timeLeft = this.querySelector("#minutes").value * 60;

            this.style.display = "none";  // hide form
            document.querySelector("#countdown").style.display = "block";  // show countdown div
            setDisplay(true);
            toggle(true);
    }

}

function toggle(run){
    if (run){
        document.getElementById("stop").style.display = "inline";
        document.getElementById("start").style.display = "none";
        clearInterval(timer);
        timer = setInterval(onTick, 1000);
    }
    else {
        document.getElementById("stop").style.display = "none";
        document.getElementById("start").style.display = "inline";
        clearInterval(timer);
    }
}

function cancel(){
    clearInterval(timer);
    document.querySelector("#countdown").style.display = "none";
    document.querySelector("form[name='countdown_form']").style.display = "block";
}

function getSecondDisplay(seconds){
    const min = Math.floor(seconds/60);
    seconds = seconds % 60;
    let str = (min < 10) ? "0": "";
    str += min + ":";
    str += (seconds <10) ? "0" + seconds: seconds;
    return str;
}

function onTick(){
    timeLeft--;
    setDisplay(false);
    if (timeLeft === 0){
        // kill the timer
        clearInterval(timer);
        alert(title);
        document.querySelector("#countdown").style.display = "none";
        document.querySelector("form[name='countdown_form']").style.display = "block";
    }
}

function setDisplay(isInitial){
    document.getElementById("timer").innerText = getSecondDisplay(timeLeft);
    let progress = document.getElementById("progressbar");
    if (isInitial){
        progress.max = timeLeft;
    }
    progress.value = timeLeft;
}

window.onload = init;