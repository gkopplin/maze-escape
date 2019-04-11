class Character {
    draw(ctx) {
        ctx.beginPath();
        ctx.rect(20, 20, 20, 20);
        ctx.fillStyle = "#FF0000";
        ctx.fill();
        ctx.closePath();
    }
}

export default Character;