import Display from './display';

const KEYS = [
    "Right",
    "Left",
    "Up",
    "Down",
    "ArrowRight",
    "ArrowLeft",
    "ArrowUp",
    "ArrowDown"
];

class Game {
    constructor () {
        this.initialRender =  this.initialRender.bind(this);
        this.reRender = this.reRender.bind(this);
        this.restart = this.restart.bind(this);
    }

    initialRender () {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.display = new Display();
        this.root = document.getElementById('root');

        this.display.draw(this.ctx);
        this.setRerenderListener();
    }

    restart () {
        this.root.classList.add("hidden");
        this.canvas.classList.remove("hidden");
        this.display.restart(this.ctx);
        this.setRerenderListener();
    }

    reRender(e) {
        if (!e || KEYS.includes(e.key)) {
            this.display.updateDead();
            if (this.display.dead) {
                this.display.dead = false;
                this.canvas.classList.add("hidden");
                this.root.classList.remove("hidden");
                this.root.innerHTML = "<p>you dead.</p>";

                this.setRestartListener();
            }
        }
    }

    setRerenderListener () {
        document.removeEventListener("keydown", this.restart);
        document.addEventListener("keydown", this.reRender);
    }

    setRestartListener () {
        document.removeEventListener("keydown", this.reRender);
        document.addEventListener("keydown", this.restart);
    }
}

export default Game;


