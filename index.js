let tollerbutton = document.querySelector("#tollerbutton");
let video = document.querySelector("#video");
let currentDelay = 1000;
let timer = document.querySelector("#timer");
let time = 15;
let pausetime = 10;

tollerbutton.style.display = "none";
startSequence();

function startSequence() {
    let intervalId = setInterval(() => {
        time = time - 1;
        timer.textContent = time;
        if (time === 0) {
            video.style.display = "none";
            tollerbutton.style.display = "none";
            clearInterval(intervalId);
            pause();
        }

    }, currentDelay);
}


tollerbutton.addEventListener("click", () => {
    time = 15;
    tollerbutton.style.display = "none";
    video.style.display = "none";
    video.style.display = "block";
    startSequence();
});
function pause() {
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
