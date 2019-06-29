import Sprite from './sprite';

class Character {
    constructor(pos, type, validMove, userPos) {
        this.pos = pos;
        this.type = type;
        this.validMove = validMove;
        this.userPos = userPos;
        this.keyDown = this.keyDown.bind(this);
        this.botMove = this.botMove.bind(this);
        this.setKeyListeners = this.setKeyListeners.bind(this);
    }

    draw(ctx) {
        const sprite = new Sprite({x: this.pos[0], y: this.pos[1], type: this.type});
        sprite.draw(ctx);
    }

    setKeyListeners() {
        document.addEventListener("keydown", this.keyDown);
    }

    removeKeyListeners() {
        document.removeEventListener("keydown", this.keyDown);
    }

    updateUserPos (userPos) {
        this.userPos = userPos;
    }

    botMove(){             
        const xDiff = this.pos[0] - this.userPos[0];
        const yDiff = this.pos[1] - this.userPos[1];

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            return this.botMoveHorz(xDiff) === false ? this.move(this.botMoveVert(yDiff)) : this.move(this.botMoveHorz(xDiff));
        } else {
            return this.botMoveVert(yDiff) === false ? this.move(this.botMoveHorz(xDiff)) : this.move(this.botMoveVert(yDiff));
        }
    }

    botMoveHorz(xDiff){
       if (xDiff < 0) {
           return this.validMove(this.pos, [this.pos[0] + 30, this.pos[1]]) ? "ArrowRight" : false;
       }
        return this.validMove(this.pos, [this.pos[0] - 30, this.pos[1]]) ? "ArrowLeft" : false;
    }

    botMoveVert(yDiff){
       if (yDiff < 0) {
           return this.validMove(this.pos, [this.pos[0], this.pos[1] + 30]) ? "ArrowDown" : false;
       }
        return this.validMove(this.pos, [this.pos[0], this.pos[1] - 30]) ? "ArrowUp" : false;
    }

    move (direction) {
        if (direction === false) return;
        if (direction === "Right" || direction === "ArrowRight") {
            this.pos[0] = this.validMove(this.pos, [this.pos[0] + 30, this.pos[1]]) ? this.pos[0] + 30 : this.pos[0];
        }
        else if (direction === "Left" || direction === "ArrowLeft") {
            this.pos[0] = this.validMove(this.pos, [this.pos[0] - 30, this.pos[1]]) ? this.pos[0] - 30 : this.pos[0];
        }
        else if (direction === "Up" || direction === "ArrowUp") {
            this.pos[1] = this.validMove(this.pos, [this.pos[0], this.pos[1] - 30]) ? this.pos[1] - 30 : this.pos[1];
        }
        else if (direction === "Down" || direction === "ArrowDown") {
            this.pos[1] = this.validMove(this.pos, [this.pos[0], this.pos[1] + 30]) ? this.pos[1] + 30 : this.pos[1];
        }
    }

    keyDown(e) {
        if (this.type === "user") {
            this.move(e.key);
        } else {
            this.botMove();
        }
    }
}

export default Character;