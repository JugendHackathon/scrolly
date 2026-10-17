let tollerbutton = document.querySelector("#tollerbutton");
let video = document.querySelector("#video");
let currentDelay = 1000;
let timer = document.querySelector("#timer");
let time = 15;
let pausetime = 10;
let currentIndex = 0;
let weiterbutton = document.querySelector("#weiterbutton");
const videoList = [
    "https://www.tiktok.com/player/v1/6718335390845095173?music_info=1&description=1&autoplay=1&loop=1&play_button=0",
    "https://www.tiktok.com/player/v1/7630521780754500878?music_info=1&description=1&autoplay=1&loop=1&play_button=0",
    "https://www.tiktok.com/player/v1/7561827045118872853?music_info=1&description=1&autoplay=1&loop=1&play_button=0"
];

video.src = videoList[currentIndex]

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
    weiterbutton.style.display = "block";

    startSequence();

});
function pause() {
    pausetime = 10;
    weiterbutton.style.display = "none";

    let intervalId = setInterval(() => {
        pausetime = pausetime - 1;
        timer.textContent = pausetime;
        if (pausetime === 0) {
            tollerbutton.style.display = "block";
            clearInterval(intervalId);
        }
    }, currentDelay);

}

weiterbutton.addEventListener("click", () => {
    currentIndex = currentIndex + 1
    if (currentIndex >= 3) {
        currentIndex = 0
    }
    video.src = videoList[currentIndex];
});
