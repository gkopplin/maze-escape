class Character {
    constructor(pos, type, userPos) {
        this.pos = pos;
        this.type = type;
        this.userPos = userPos;
        this.keyDown = this.keyDown.bind(this);
        this.move = this.move.bind(this);
        this.setKeyListeners = this.setKeyListeners.bind(this);
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

    updateUserPos (userPos) {
        this.userPos = userPos;
    }

    move(){                         
        const xDiff = this.pos[0] - this.userPos[0];
        const yDiff = this.pos[1] - this.userPos[1];
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            this.pos[0] = xDiff < 0 ? this.pos[0] + 10 : this.pos[0] - 10;
        } else {
            this.pos[1] = yDiff < 0 ? this.pos[1] + 10 : this.pos[1] - 10;
        }
    }

    keyDown(e) {
        if (this.type === "user") {
            
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
        } else {
            setTimeout(this.move, 100);
        }
    }
}

export default Character;