let tollerbutton = document.querySelector("#tollerbutton");
let smiley = document.querySelector("#smiley");
let video = document.querySelector("#video");
let currentDelay = 1000;
let timer = document.querySelector("#timer");
let time = 15;
let pausetime = 10;
let pause = document.querySelector("#pause");
let Lernvideosbutton = document.querySelector("#Lernvideosbutton");
let currentIndex = 0;
let weiterbutton = document.querySelector("#weiterbutton");
const videoList = [
    "https://www.tiktok.com/player/v1/6718335390845095173?music_info=1&description=1&autoplay=1&loop=1",
    "https://www.tiktok.com/player/v1/7630521780754500878?music_info=1&description=1&autoplay=1&loop=1",
    "https://www.tiktok.com/player/v1/7561827045118872853?music_info=1&description=1&autoplay=1&loop=1",
    "https://www.tiktok.com/player/v1/7696650054328798496?music_info=1&description=1&autoplay=1&loop=1",
    "https://www.tiktok.com/player/v1/7696835328304286982?music_info=1&description=1&autoplay=1&loop=1",
    "https://www.tiktok.com/player/v1/7654741412855942430?music_info=1&description=1&autoplay=1&loop=1",
    "https://www.tiktok.com/player/v1/7432281481000635680?music_info=1&description=1&autoplay=1&loop=1",
    "https://www.tiktok.com/player/v1/7687289859236449549?music_info=1&description=1&autoplay=1&loop=1",
];
const videoList2 = [
    "https://www.tiktok.com/player/v1/7459775418585976087?music_info=1&description=1&autoplay=1&loop=1",
    "https://www.tiktok.com/player/v1/7574899546866683138?music_info=1&description=1&autoplay=1&loop=1",
    "https://www.tiktok.com/player/v1/7543204960499027222?music_info=1&description=1&autoplay=1&loop=1",
    "https://www.tiktok.com/player/v1/7672680494772899104?music_info=1&description=1&autoplay=1&loop=1",
    "https://www.tiktok.com/player/v1/7534724405360889110?music_info=1&description=1&autoplay=1&loop=1",
    "https://www.tiktok.com/player/v1/7627197865399536929?music_info=1&description=1&autoplay=1&loop=1",
    "https://www.tiktok.com/player/v1/7525801962856516895?music_info=1&description=1&autoplay=1&loop=1",

  
];

let currentList = videoList;

for (let i = videoList.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    [videoList[i], videoList[j]] = [videoList[j], videoList[i]];
}

console.log(videoList);

video.src = videoList[currentIndex]

startSequence();

function startSequence() {
    let intervalId = setInterval(() => {
        time = time - 1;
        timer.textContent = time;
        if (time <= 10){
            smiley.src = "smiley2.jpg";
        } if (time <= 5){
            smiley.src = "smiley3.jpg";
        }
        if (time === 0) {
            // Zeit abgelaufen, Pause machen!
            video.style.display = "none";
            pause.style.display = "flex";
            tollerbutton.style.visibility = "hidden";
            Lernvideosbutton.style.visibility = "hidden";
            clearInterval(intervalId);
            startPause();
        }
    }, currentDelay);
}

function playVideoList(chosenList) {
    currentList = chosenList;
    video.src = currentList[currentIndex]; 
    time = 15;
    tollerbutton.style.visibility = "hidden";
    Lernvideosbutton.style.visibility = "hidden";
    pause.style.display = "none";
    video.style.display = "block";
    weiterbutton.style.visibility = "visible";

    startSequence();
    
    video.contentWindow.postMessage({
        type: "play",
        "x-tiktok-player": true
    }, "*");
}


tollerbutton.addEventListener("click", () => {
    playVideoList(videoList);
});

function startPause() {
    pausetime = 10;
    weiterbutton.style.visibility = "hidden";


    video.contentWindow.postMessage({
        type: "pause",
        "x-tiktok-player": true
    }, "*");

    let intervalId = setInterval(() => {
        pausetime = pausetime - 1;
        timer.textContent = pausetime;
        if (pausetime <= 10){
            smiley.src = "smiley2.jpg";
        } if (pausetime <= 5){
            smiley.src = "smiley1.jpg";
        }
        if (pausetime === 0) {
            tollerbutton.style.visibility = "visible";
            Lernvideosbutton.style.visibility = "visible";
            clearInterval(intervalId);
        }
    }, currentDelay);

}

weiterbutton.addEventListener("click", () => {
    currentIndex = currentIndex + 1
    if (currentIndex >= currentList.length) {
        currentIndex = 0
    }
    video.src = currentList[currentIndex];
});

Lernvideosbutton.addEventListener("click", () => {
playVideoList(videoList2);
});
