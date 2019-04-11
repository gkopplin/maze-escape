class Character {
    constructor(pos, color) {
        this.pos = pos;
        this.color = color;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.pos[0],
                 this.pos[1],
                 this.pos[2],
                 this.pos[3]);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}

export default Character;