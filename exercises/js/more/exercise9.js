"use strict";
/**
 * Exercise #9: Countdown timer
 */

var timeLeft = -1;  // global variable, stores time left (in seconds)

function init(){

    document.querySelector("form[name='countdown_form']").onsubmit = 
        function(event) {
            event.preventDefault();  // preventing the form from submission

            // set time left (seconds)
            timeLeft = this.querySelector("#minutes").value * 60;

            this.style.display = "none";  // hide form
            document.querySelector("#countdown").style.display = "block";  // show countdown div
            let display = new Display("countdown",timeLeft);
            new Countdown(timeLeft, display.update, ()=>setTimeout(display.remove, 5000)).start();
    }

}

function getSecondDisplay(seconds){
    const min = Math.floor(seconds/60);
    seconds = seconds % 60;
    let str = (min < 10) ? "0": "";
    str += min + ":";
    str += (seconds <10) ? "0" + seconds: seconds;
    return str;
}


function Display(elementid,secondsLeft){
    this.element = document.getElementById(elementid);
    this.timer = document.createElement("div");
    this.progress = document.createElement("progress");
    
    this.timer.id = "timer";
    this.progress.id = "progressbar";
    this.progress.value = secondsLeft;
    this.progress.max = secondsLeft;
    this.element.appendChild(this.timer);
    this.element.appendChild(this.progress);
    
    this.update = (secondsLeft)=>{
        console.log("secondsLeft: " + secondsLeft)
        this.timer.innerText = getSecondDisplay(secondsLeft);
        this.progress.value = secondsLeft;
    }

    this.update(secondsLeft);
    this.remove = ()=> {
        this.element.removeChild(this.timer);
        this.element.removeChild(this.progress);
    }
    this.removeWithTimeout = ()=>{
        setTimeout(this.remove, 5000);
    }


    // this.countdown = new Countdown(timeLeft, this.update, this.removeWithTimeout);
    // this.countdown.start();
}

function Countdown(seconds, everySecond, final){
    this.seconds = seconds;
    this.onTick = ()=>{
        this.seconds -= 1;
        everySecond(this.seconds);
        console.log("seconds" + this.seconds);
        if (this.seconds === 0) {
            clearInterval(this.timer);
            delete this.timer;
            final();
        } 
    }
    this.start = function(){
        this.timer = setInterval(this.onTick,1000);
    }
}

window.onload = init;