import Character from './character';

 class Level {
    constructor(levels) {
        this.levels = levels;
    }
    
    draw(ctx) {
        const char = new Character();
        char.draw(ctx);
        this.levels.forEach(level => {
            ctx.beginPath();
            ctx.rect(level[0],
                     level[1],
                     level[2],
                     level[3]);
            ctx.fillStyle = "#FF0000";
            ctx.fill();
            ctx.closePath();
        });
    }
 }

 export default Level;