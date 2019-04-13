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
    constructor({level, charPos, exit}) {
        this.level = [];
        level.forEach(obj => {
            this.level.push({0: obj[0], 1: obj[1], 2: obj[2], 3: obj[3]});
        });

        this.charPos = [];
        charPos.forEach(obj => {
            this.charPos.push({ 0: obj[0], 1: obj[1] });
        });

        this.exit = exit;
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
        this.dead = this.checkDead();
        this.chars.forEach((char, index) => {
            if (index === 0) {
                userPos = char.pos;
            } else {
                char.updateUserPos(userPos);
            }
            if (!this.dead) {
                char.draw(ctx);
            }
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
    
    draw(e, ctx) {
        if (!e || KEYS.includes(e.key)) {
            if (ctx) {
                this.ctx = ctx;
            }
            this.ctx.clearRect(0, 0, 720, 650);
            this.drawGrid(this.ctx);
            
            this.dead = this.checkDead();
            if (this.chars.length === 0) {
                this.drawInitial(this.ctx);
            } else {
                this.drawChars(this.ctx);
                this.drawWalls(this.ctx);
            }            
        }

    }
    
    checkDead () {
        const enemies = this.chars.slice(1);

        return enemies.some(enemy => {
            return enemy.pos[0] === this.chars[0].pos[0] &&
                    enemy.pos[1] === this.chars[0].pos[1];
        });
    }

    setKeyListeners() {
        document.addEventListener("keydown", this.draw);
    }

    removeKeyListeners() {
        document.removeEventListener("keydown", this.draw);
    }

    validMove (oldPos, newPos) {
        const bottom = oldPos[1] + 80;
        const newBottom = newPos[1] + 80;
        
        return (this.level.every(coord => {
            const enemies = this.chars.slice(1);
            if (this.exit[0] === newPos[0] &&
                this.exit[1] === newPos[1]){

                this.won = true;
                return true;
            }
            if (enemies.some(enemy => {
                return enemy.pos[0] === newPos[0] &&
                       enemy.pos[1] === newPos[1]; 
            })){
                return false;
            }
            if (newPos[0] < 0 ||
                newPos[0] > 700 ||
                newBottom <= 30 ||
                newBottom > 635) {
                    return false;
            }
            if (coord[2] > coord[3]) {
                if (
                    ((coord[1] + 45 === bottom &&
                      coord[1] - 5 === newBottom) ||
                     (coord[1] - 5 === bottom &&
                      coord[1] + 45 === newBottom)) &&
                        oldPos[0] >= coord[0] &&
                        oldPos[0] < coord[0] + coord[2] -5
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
                        bottom < coord[1] + coord[3]
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

    removeCharListeners () {
        this.chars.forEach(char => char.removeKeyListeners());
    }
 }

 export default Level;

const GRID = [];
for (let i = 10; i <= 700; i = i + 50) {
    GRID.push([i, 0, 1, 700]);
}
for (let i = 40; i <= 650; i = i + 50) {
    GRID.push([0, i, 700, 1]);
}