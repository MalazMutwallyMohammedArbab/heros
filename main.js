let counDownDate = new Date("Dec 31, 2024 23:59:59").getTime();
let counter = setInterval(() =>{
    let dateNow = new Date().getTime();
    let dateDiff = counDownDate - dateNow;

    let days = Math.floor(dateDiff / (1000*60*60*24));
    let hours = Math.floor((dateDiff % (1000*60*60*24)) / (1000*60*60));
    let minutes = Math.floor((dateDiff % (1000*60*60)) / (1000*60));
    let seconds = Math.floor((dateDiff % (1000*60)) / 1000);

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days + "D:";
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}h:` : hours + "h:";
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}m:` : minutes + "m:";
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}s` : seconds + "s";

    if (dateDiff < 0){
        clearInterval(counter);
    }
}, 1000);