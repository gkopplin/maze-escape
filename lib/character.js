class Character {
    constructor(pos, type) {
        this.pos = pos;
        this.type = type;
        this.right = 0;
        this.left = 0;
        this.up = 0;
        this.down = 0;
        this.keyDown = this.keyDown.bind(this);
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.pos[0],
                 this.pos[1],
                 this.pos[2],
                 this.pos[3]);
        ctx.fillStyle = this.type === "user" ? "#0000FF" : "#FF0000";
        ctx.fill();
        ctx.closePath();
    }

    setKeyListeners() {
        document.addEventListener("keydown", this.keyDown);
    }

    keyDown(e) {
        if (e.key === "Right" || e.key === "ArrowRight") {
            this.pos[0] += 10;
        }
        else if (e.key === "Left" || e.key === "ArrowLeft") {
            this.pos[0] -= 10;
        }
        else if (e.key === "Up" || e.key === "ArrowUp") {
            this.pos[1] -= 10;
        }
        else if (e.key === "Down" || e.key === "ArrowDown") {
            this.pos[1] += 10;
        }
    }
}

export default Character;