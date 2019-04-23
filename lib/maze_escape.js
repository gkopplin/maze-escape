import {Game} from './game';

document.addEventListener('DOMContentLoaded', () => {
    const musicOn = document.getElementsByClassName("music-on-container")[0];
    const musicOff = document.getElementsByClassName("music-off-container")[0];

    musicOn.addEventListener("click", toggleMusic);
    musicOff.addEventListener("click", toggleMusic);

    const game = new Game();
    game.initialRender();
});

const toggleMusic = e => {
    if (e.target.classList.contains("music-on")){
        document.getElementsByClassName("music-on-container")[0].classList.add("hidden");
        document.getElementsByClassName("music-off-container")[0].classList.remove("hidden");
        document.getElementById("player").play();
    } else {
        document.getElementsByClassName("music-off-container")[0].classList.add("hidden");
        document.getElementsByClassName("music-on-container")[0].classList.remove("hidden");
        document.getElementById("player").pause();
    }
};