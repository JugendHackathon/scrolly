let tollerbutton = document.querySelector("#tollerbutton");
let video = document.querySelector("#video");
let currentDelay = 1000;
let timer = document.querySelector("#timer");
let time = 15;
let pausetime = 10;
let pause = document.querySelector("#pause");

let currentIndex = 0;
let weiterbutton = document.querySelector("#weiterbutton");
const videoList = [
    "https://www.tiktok.com/player/v1/6718335390845095173?music_info=1&description=1&autoplay=1&loop=1",
    "https://www.tiktok.com/player/v1/7630521780754500878?music_info=1&description=1&autoplay=1&loop=1",
    "https://www.tiktok.com/player/v1/7561827045118872853?music_info=1&description=1&autoplay=1&loop=1",
    "https://www.tiktok.com/player/v1/6718335390845095173?music_info=1&description=1&autoplay=1&loop=1",
    "https://www.tiktok.com/player/v1/7696650054328798496?music_info=1&description=1&autoplay=1&loop=1",
    "https://www.tiktok.com/player/v1/7696835328304286982?music_info=1&description=1&autoplay=1&loop=1",
    "https://www.tiktok.com/player/v1/7696835328304286982?music_info=1&description=1&autoplay=1&loop=1",
    "https://www.tiktok.com/player/v1/7654741412855942430?music_info=1&description=1&autoplay=1&loop=1",
    "https://www.tiktok.com/player/v1/7432281481000635680?music_info=1&description=1&autoplay=1&loop=1",
    "https://www.tiktok.com/player/v1/7687289859236449549?music_info=1&description=1&autoplay=1&loop=1",
    "https://www.tiktok.com/player/v1/7538987875631697182?music_info=1&description=1&autoplay=1&loop=1",
];

video.src = videoList[currentIndex]

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
    weiterbutton.style.visibility = "visible";

    startSequence();

});

function startPause() {
    pausetime = 10;
    weiterbutton.style.visibility = "hidden";

    let intervalId = setInterval(() => {
        pausetime = pausetime - 1;
        timer.textContent = pausetime;
        if (pausetime === 0) {
            tollerbutton.style.visibility = "visible";
            clearInterval(intervalId);
        }
    }, currentDelay);

}

weiterbutton.addEventListener("click", () => {
    currentIndex = currentIndex + 1
    if (currentIndex >= videoList.length) {
        currentIndex = 0
    }
    video.src = videoList[currentIndex];
});
