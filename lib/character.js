class Character {
    constructor(pos, type) {
        this.pos = pos;
        this.type = type;
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
}

export default Character;