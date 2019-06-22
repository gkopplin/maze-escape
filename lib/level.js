import Character from './character';
import Sprite from './sprite';
import {KEYS} from './game';

 class Level {
    constructor({level, charPos, exit}) {
        this.level = [];
        level.forEach(obj => {
            this.level.push({x: obj.x, y: obj.y, type: obj.type, num: obj.num});
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
            let sprite = new Sprite({x: coord.x, y: coord.y, type: coord.type});
            sprite.draw(ctx);
            let i = 24;
            let num = coord.num;
            while (num) {
                if (coord.type === "wall-horz") {
                    sprite = new Sprite({ x: coord.x + i, y: coord.y, type: coord.type });
                } else if (coord.type === "wall-vert") {
                    sprite = new Sprite({ x: coord.x, y: coord.y + i, type: coord.type });
                }
                sprite.draw(ctx);
                i += 24;
                num -= 1;
            }
        });

        // this.level.forEach(coord => {
        //     ctx.beginPath();
        //     ctx.moveTo(coord[0] + coord[2],     coord[1]);
        //     ctx.lineTo(coord[0] + coord[2] + 5, coord[1] + 5);
        //     ctx.lineTo(coord[0] + coord[2] + 5, coord[1] + coord[3] + 5);
        //     ctx.lineTo(coord[0] + coord[2],     coord[1] + coord[3]);
        //     ctx.lineTo(coord[0] + coord[2],     coord[1]);

        //     ctx.stroke();
        //     ctx.strokeStyle = "#222222";
        //     ctx.fillStyle = "#222222";

        //     ctx.moveTo(coord[0],                coord[1] + coord[3]);
        //     ctx.lineTo(coord[0] + 5,            coord[1] + coord[3] + 5);
        //     ctx.lineTo(coord[0] + coord[2] + 5, coord[1] + coord[3] + 5);
        //     ctx.lineTo(coord[0] + coord[2],     coord[1] + coord[3]);
        //     ctx.lineTo(coord[0],                coord[1] + coord[3]);

        //     ctx.stroke();
        //     ctx.fill();
        //     ctx.closePath();
        // });


        // this.level.forEach(coord => {
        //     ctx.beginPath();
        //     ctx.rect(coord[0],
        //         coord[1],
        //         coord[2],
        //         coord[3]);
        //     ctx.fillStyle = "#FFFFFF";
        //     ctx.fill();
        //     ctx.closePath();
        // });
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
            this.ctx.clearRect(0, 0, 720, 648);
            this.drawBackground(this.ctx);
            this.drawGrid(this.ctx);
            
            this.dead = this.checkDead();
            if (this.chars.length === 0) {
                this.drawInitial(this.ctx);
            } else {
                this.drawWalls(this.ctx);
                this.drawChars(this.ctx);
            }     
        }

    }

    drawBackground(ctx){
        let x = 0;
        
        let tile;

        while (x < 720 ) {
            let y = 0;

            while (y < 640) {
                tile = new Sprite({ x, y, type: 'floor' });
                tile.draw(ctx);

                y += 100;
            }
            x += 100;
        }
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
        
        return (this.level.every(coord => this.checkCollision({ newPos, coord, oldPos }) ));
        // return (this.level.every(coord => this.checkCollision({ newPos, newBottom, coord, bottom, oldPos }) ));
    }

    checkCollision ({newPos, coord, oldPos}) {
        if (this.exit[0] === newPos[0] &&
            this.exit[1] === newPos[1]) {

            this.won = true;
            return true;
        }
        if (this.enemies.some(enemy => {
            return enemy.pos[0] === newPos[0] &&
                enemy.pos[1] === newPos[1];
        })) {
            return false;
        }
        if (newPos[0] < 0 ||
            newPos[0] > 700 ||
            newPos[1] < 0 ||
            newPos > 624) {
            return false;
        }

        const endPoint = coord.num ? coord.num*24 : 24;
        if (["wall-left", "wall-right", "wall-horz"].includes(coord.type)) {
            if (
                ((coord.y + 24 === oldPos[1] &&
                    coord.y === newPos[1]) ||
                    (coord.y === oldPos[1] &&
                        coord.y + 24 === newPos[1])) &&
                oldPos[0] >= coord.x &&
                oldPos[0] < endPoint
            ) {
                return false;
            }
        } else {
            if (
                ((coord.x + 24 === oldPos[0] &&
                    coord.x === newPos[0]) ||
                    (coord.x === oldPos[0] &&
                        coord.x + 24 === newPos[0])) &&
                oldPos[1] >= coord.y &&
                oldPos[1] < endPoint
            ) {
                return false;
            }
        }
        return true;
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