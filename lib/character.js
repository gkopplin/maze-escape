class Character {
    draw(ctx) {
        ctx.beginPath();
        ctx.rect(20, 20, 10, 10);
        ctx.fillStyle = "#FF0000";
        ctx.fill();
        ctx.closePath();
    }
}

export default Character;