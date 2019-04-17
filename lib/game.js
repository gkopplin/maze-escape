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

        this.showInstructions();  
    }

    showInstructions() {
        this.canvas.classList.add("hidden");
        this.root.innerHTML = "<img src='./assets/instructions.jpeg'>";
        this.setRestartListener();
    }

    reset (e) {
        e.preventDefault();
        this.root.classList.add("hidden");
        this.canvas.classList.remove("hidden");

        if (this.display.won) {
            this.display.reset(this.ctx, true);
        } 
        else if (this.display.levelNum === 0 &&
            this.display.dead === false ) {
                this.display.draw(this.ctx);
        }
        else {
            this.display.reset(this.ctx, false);
        }

        this.display.dead = false;
        this.display.won = false;
        this.setRerenderListener();
    }

    reRender(e) {
        e.preventDefault();
        if (!e || KEYS.includes(e.key)) {
            this.display.update();
            if (this.display.dead) {
                this.canvas.classList.add("hidden");
                this.root.classList.remove("hidden");
                this.root.innerHTML = "<img src='./assets/dead.jpg' class='listener-screen'>";

                this.setRestartListener();
            }
            else if (this.display.won) {
                if (this.display.levelNum === 2) {
                    this.endScreen();
                } else {
                    this.canvas.classList.add("hidden");
                    this.root.classList.remove("hidden");
                    this.root.innerHTML = "<img src='./assets/escaped.jpg' class='listener-screen'>";
                    
                    this.setNextLevelListener();
                }
            }
        }
    }

    endScreen() {
        this.canvas.classList.add("hidden");
        this.root.classList.remove("hidden");
        this.root.innerHTML = "<img src='./assets/won.jpg' class='listener-screen'>";
        this.display.won = false;
        this.display.dead = false;
        this.display.levelNum = 0;
        this.setRestartListener();
    }

    setRerenderListener () {
        document.removeEventListener("keydown", this.reset);
        document.addEventListener("keydown", this.reRender);
    }

    setRestartListener () {
        document.removeEventListener("keydown", this.reRender);
        if (!(this.display.levelNum === 0 &&
              this.display.dead === false &&
              this.display.won !== true)){

                  this.display.removeKeyListeners();
        }
        document.addEventListener("keydown", this.reset);
    }

    setNextLevelListener () {
        document.removeEventListener("keydown", this.reRender);
        this.display.removeKeyListeners();
        document.addEventListener("keydown", this.reset);
    }
}

export {Game, KEYS};


