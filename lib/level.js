import Character from './character';

 class Level {
    constructor(level, chars) {
        this.level = level;
        this.chars = chars;
    }
    
    draw(ctx) {
        this.chars.forEach((pos, index) => {
            const char = index === 0 ? new Character(pos, "#0000FF") : new Character(pos, "#FF0000");
            char.draw(ctx);
        });

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
 }

 export default Level;