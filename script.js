let countDownUntil = new Date("January 1, 2023 00:00:00").getTime();
let currentDate = new Date().getTime();


let tick = setInterval(function(){
 
    let dayEl = document.querySelector("#days");
    let hoursEl = document.querySelector("#hours");
    let minutesEl = document.querySelector("#minutes");
    let secondsEL = document.querySelector("#seconds");
    
    let timeDifference = countDownUntil - currentDate;

    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    let hours = Math.floor(timeDifference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    let minutes = Math.floor(timeDifference % (1000 * 60 * 60) / (1000 * 60) )
    let seconds = Math.floor(timeDifference % (1000 * 60) / 1000 )
    


dayEl.innerHTML = days + " days until New Years"
hoursEl.innerHTML = hours + " hours until New Years"
minutesEl.innerHTML = minutes + " minutes until New Years"
secondsEL.innerHTML = seconds + " seconds until New Years"

}, 1000)