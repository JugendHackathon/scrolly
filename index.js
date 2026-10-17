let tollerbutton = document.querySelector("#tollerbutton");
let video = document.querySelector("#video");
let currentDelay = 1000;
let time = 15;
let timer = document.querySelector("#timer");
let videotimer;
let pausetime = 10;
let pausetimer = document.querySelector("#pausetimer");


tollerbutton.style.display = "none";
startSequence();
pausetimer.style.display = "none";

function startSequence() {
    let intervalId = setInterval(() => {
     time = time - 1;
     timer.textContent = time;
     if (time === 0) {
         video.style.display = "none"; 
         tollerbutton.style.display = "none";
         timer.style.display = "none";
         clearInterval(intervalId);
         pause ();
     }
    
    }, currentDelay);
}


tollerbutton.addEventListener("click", () => {
    time = 15;
    tollerbutton.style.display = "none";
    video.style.display = "none";
    video.style.display = "block";
    timer.style.display = "block";
    pausetimer.style.display = "none";
    startSequence();
});
function pause() {
    pausetimer.style.display = "block"
    pausetime = 10;

     let intervalId = setInterval(() => {
     pausetime = pausetime - 1;
     pausetimer.textContent = pausetime;
     if (pausetime === 0) {
        tollerbutton.style.display = "block";
        clearInterval(intervalId);
     }
     }, currentDelay);

}
