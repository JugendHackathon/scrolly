let tollerbutton = document.querySelector("#tollerbutton");
let video = document.querySelector("#video");
let currentDelay = 1000;
let timer = document.querySelector("#timer");
let time = 15;
let pausetime = 10;
let pause = document.querySelector("#pause");

startSequence();

function startSequence() {
    let intervalId = setInterval(() => {
        time = time - 1;
        timer.textContent = time;
        if (time === 0) {
            // Zeit abgelaufen, Pause machen!
            video.style.display = "none"; 
            pause.style.display = "flex";
            tollerbutton.style.visibility = "hidden";
            clearInterval(intervalId);
            startPause();
        }
    }, currentDelay);
}


tollerbutton.addEventListener("click", () => {
    time = 15;
    tollerbutton.style.visibility = "hidden";
    pause.style.display = "none";
    video.style.display = "block";
    startSequence();
});

function startPause() {
    pausetime = 3;

    let intervalId = setInterval(() => {
        pausetime = pausetime - 1;
        timer.textContent = pausetime;
        if (pausetime === 0) {
            tollerbutton.style.visibility = "visible";
            clearInterval(intervalId);
        }
    }, currentDelay);

}
