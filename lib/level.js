import Character from './character';

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
    
    draw(ctx, e) {
        if (!e || KEYS.includes(e.key)) {

            this.ctx = ctx;
            ctx.clearRect(0, 0, 720, 620);
            this.drawGrid(ctx);
            
            if (this.chars.length === 0) {
                this.drawInitial(ctx);
            } else {
                this.drawChars(ctx);
                this.drawWalls(ctx);
            }
        }
    }

    setKeyListeners() {
        document.addEventListener("keydown", (e) => this.draw(this.ctx, e));
    }

    validMove (oldPos, newPos) {
        const bottom = oldPos[1] + 80;
        const newBottom = newPos[1] + 80;
        
        return (this.level.every(coord => {
            if (coord[2] > coord[3]) {
                if (
                    ((coord[1] + 40 === bottom &&
                      coord[1] - 10 === newBottom) ||
                     (coord[1] - 10 === bottom &&
                      coord[1] + 40 === newBottom)) &&
                        oldPos[0] >= coord[0] &&
                        oldPos[0] <= coord[0] + coord[2]
                ) {
                    return false;
                }
            } else {
                if ( 
                    ((coord[0]+5 === oldPos[0] &&
                      coord[0]-45 === newPos[0]) ||
                     (coord[0]-45 === oldPos[0] &&
                      coord[0]+5 === newPos[0])) &&
                        bottom >= coord[1] &&
                        bottom <= coord[1] + coord[3]
                ) {
                    return false;
                }
            }
            return true;
        }));
    }

    drawGrid(ctx) {
        GRID.forEach(line => {
            ctx.beginPath();
            ctx.rect(line[0],
                line[1],
                line[2],
                line[3]);
            ctx.fillStyle = "#F1F1F1";
            ctx.fill();
            ctx.closePath();
        });
    }
 }

 export default Level;

const GRID = [];
for (let i = 10; i <= 700; i = i + 50) {
    GRID.push([i, 0, 1, 700]);
}
for (let i = 10; i <= 700; i = i + 50) {
    GRID.push([0, i, 700, 1]);
}