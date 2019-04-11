import Character from './character';

 class Level {
    constructor(level, chars) {
        this.level = level;
        this.chars = chars;
        this.right = 0;
        this.left = 0;
        this.up = 0;
        this.down = 0;
        this.keyDown = this.keyDown.bind(this);
        this.keyUp = this.keyUp.bind(this);
    }

    drawWalls(ctx) {
        this.level.forEach(coord => {
            ctx.beginPath();
            ctx.rect(coord[0],
                coord[1],
                coord[2],
                coord[3]);
            ctx.fillStyle = "#222222";
            ctx.fill();
            ctx.closePath();
        });
    }

    drawChars(ctx) {
        this.chars.forEach((pos, index) => {
            pos[0] = pos[0] + this.right - this.left;
            pos[1] = pos[1] + this.down - this.up;
            const char = index === 0 ? new Character(pos, "user") : new Character(pos, "bot");
            char.draw(ctx);
        });
    }
    
    draw(ctx) {
        this.ctx = ctx;
        ctx.clearRect(0, 0, 700, 600);
        this.drawChars(ctx);
        this.drawWalls(ctx);
    }

    setKeyListeners() {
        document.addEventListener("keydown", this.keyDown);
        document.addEventListener("keyup", this.keyUp);
    }

    keyDown(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            this.right = 10;
            this.draw(this.ctx);
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            this.left = 10;
            this.draw(this.ctx);
        }
        else if (e.key == "Up" || e.key == "ArrowUp") {
            this.up = 10;
            this.draw(this.ctx);
        }
        else if (e.key == "Down" || e.key == "ArrowDown") {
            this.down = 10;
            this.draw(this.ctx);
        }
    }

    keyUp(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            this.right = 0;
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            this.left = 0;
        }
        else if (e.key == "Up" || e.key == "ArrowUp") {
            this.up = 0;
        }
        else if (e.key == "Down" || e.key == "ArrowDown") {
            this.down = 0;
        }
    }
 }

 export default Level;