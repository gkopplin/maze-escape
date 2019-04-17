import Character from './character';
import {KEYS} from './game';

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
        this.dead = false;
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
        this.chars.sort((char1, char2) => {
            return char1.pos[1] - char2.pos[1];
        });

        const user = this.chars.filter(char => char.type === "user")[0];
        userPos = user.pos;

        this.chars.forEach((char) => {
            if (char.type === "bot"){
                char.updateUserPos(userPos);
            }
            if (!this.dead &&
                !this.won) {
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
        this.chars.sort((char1, char2) => {
            return char1.pos[1] - char2.pos[1];
        });

        this.drawWalls(ctx);
    }
    
    draw(e, ctx) {
        if (!e || KEYS.includes(e.key)) {
            if (ctx) {
                this.ctx = ctx;
            }
            this.ctx.clearRect(0, 0, 720, 645);
            this.drawBackground();
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

    drawBackground(){
        const canvas = document.getElementById('canvas');
        const gradient = canvas.getContext("2d").createLinearGradient(0, 0, 0, 645);
        gradient.addColorStop(0, '#76DAE7');
        gradient.addColorStop(1.0, '#5882FA');

        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, 720, 645);
    }
    
    checkDead () {
        this.enemies = this.chars.filter(char => char.type === "bot");
        this.user = this.chars.filter(char => char.type === "user")[0];

        return this.enemies.some(enemy => {
            return enemy.pos[0] === this.user.pos[0] &&
                    enemy.pos[1] === this.user.pos[1];
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

            if (this.exit[0] === newPos[0] &&
                this.exit[1] === newPos[1]){

                this.won = true;
                return true;
            }
            if (this.enemies.some(enemy => {
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
            ctx.fillStyle = "black";
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
for (let i = 10; i <= 710; i = i + 50) {
    GRID.push([i, 40, 1, 680]);
}
for (let i = 40; i <= 615; i = i + 50) {
    GRID.push([0, i, 720, 1]);
}