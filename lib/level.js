import Character from './character';

 class Level {
    constructor(level, charPos) {
        this.level = level;
        this.charPos = charPos;
        this.draw = this.draw.bind(this);
        this.validMove = this.validMove.bind(this);
        this.chars = [];
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
        let userPos;
        this.chars.forEach((char, index) => {
            if (index === 0) {
                userPos = char.pos;
            } else {
                char.updateUserPos(userPos);
            }
            char.draw(ctx);
            char.setKeyListeners();
        });
    }

    drawInitial(ctx) {
        let char;
        let userPos;
        this.charPos.forEach((pos, index) => {
            if (index === 0) {
                char = new Character(pos, "user", this.validMove);
                userPos = pos;
            } else {
                char = new Character(pos, "bot", this.validMove, userPos);
            }
            char.draw(ctx);
            char.setKeyListeners();
            this.chars.push(char);
        });
        this.drawWalls(ctx);
    }
    
    draw(ctx) {
        this.ctx = ctx;
        ctx.clearRect(0, 0, 700, 600);

        if (this.chars.length === 0) {
            this.drawInitial(ctx);
        } else {
            this.drawChars(ctx);
            this.drawWalls(ctx);
        }
    }

    setKeyListeners() {
        document.addEventListener("keydown", () => this.draw(this.ctx));
    }

    validMove (x, y) {
        return (this.level.every(coord => {
            if (coord[0] === x &&
                coord[1] === y) {
                    return false;
            }
            else if (coord[2] > coord[3]) {
                if (coord[1] === y &&
                    x >= coord[0] &&
                    x <= coord[0] + coord[2] -10){
                        return false;
                }
            } else {
                if (coord[0] === x &&
                    y >= coord[1] &&
                    y <= coord[1] + coord[3] -10) {
                    return false;
                }
            }
            return true;
        }));
    }
 }

 export default Level;