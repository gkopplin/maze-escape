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
        this.reset = this.reset.bind(this);
    }

    initialRender () {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.display = new Display();
        this.root = document.getElementById('root');

        this.display.draw(this.ctx);
        this.setRerenderListener();
    }

    reset () {
        this.root.classList.add("hidden");
        this.canvas.classList.remove("hidden");
        if (this.display.won) {
            this.display.reset(this.ctx, true);
        } else {
            this.display.reset(this.ctx, false);
        }
        this.display.dead = false;
        this.display.won = false;
        this.setRerenderListener();
    }

    reRender(e) {
        if (!e || KEYS.includes(e.key)) {
            this.display.update();
            if (this.display.dead) {
                this.canvas.classList.add("hidden");
                this.root.classList.remove("hidden");
                this.root.innerHTML = "<p>you dead.</p>";

                this.setRestartListener();
            }
            else if (this.display.won) {
                if (this.display.levelNum === 2) {
                    this.endScreen();
                } else {

                    this.canvas.classList.add("hidden");
                    this.root.classList.remove("hidden");
                    this.root.innerHTML = "<p>you escaped... for now...</p>";
                    
                    this.setNextLevelListener();
                }
            }
        }
    }

    endScreen() {
        this.canvas.classList.add("hidden");
        this.root.classList.remove("hidden");
        this.root.innerHTML = "<p>you won!</p>";
        this.display.won = false;
        this.display.levelNum = 0;
        this.setRestartListener();
    }

    setRerenderListener () {
        document.removeEventListener("keydown", this.reset);
        document.addEventListener("keydown", this.reRender);
    }

    setRestartListener () {
        document.removeEventListener("keydown", this.reRender);
        this.display.removeKeyListeners();
        document.addEventListener("keydown", this.reset);
    }

    setNextLevelListener () {
        document.removeEventListener("keydown", this.reRender);
        this.display.removeKeyListeners();
        document.addEventListener("keydown", this.reset);
    }
}

export default Game;


