let tollerbutton = document.querySelector("#tollerbutton");
let video = document.querySelector("#video");
let currentDelay = 1000;
let timer = document.querySelector("#timer");
let time = 15;
let pausetime = 10;
let pause = document.querySelector("#pause");


tollerbutton.style.display = "none";
startSequence();

function startSequence() {
    let intervalId = setInterval(() => {
        time = time - 1;
        timer.textContent = time;
        if (time === 0) {
            // Zeit abgelaufen, Pause machen!
            video.style.display = "none"; 
            pause.style.display = "block";
            tollerbutton.style.display = "none";
            clearInterval(intervalId);
            startPause();
        }
    }, currentDelay);
}


tollerbutton.addEventListener("click", () => {
    time = 15;
    tollerbutton.style.display = "none";
    pause.style.display = "none";
    video.style.display = "block";
    startSequence();
});

function startPause() {
    pausetime = 10;

    let intervalId = setInterval(() => {
        pausetime = pausetime - 1;
        timer.textContent = pausetime;
        if (pausetime === 0) {
            tollerbutton.style.display = "block";
            clearInterval(intervalId);
        }
    }, currentDelay);

}
