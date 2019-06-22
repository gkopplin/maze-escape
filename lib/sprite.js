class Sprite {
    constructor (options) {
        this.x = options.x;
        this.y = options.y;
        this.type = options.type;

        if (this.type === "user") {
            this.image = new Image();
            this.image.src = "assets/protagonist.png";
        } else if (this.type === "bot") {
            this.image = new Image();
            this.image.src = "assets/enemy.png";
        } else if (this.type === "floor") {
            this.image = new Image();
            this.image.src = "assets/grass.jpg";
        } else {
            this.image = new Image();
            this.image.src = "assets/walls.png";
        }
    }
    
    draw (ctx) {
        this.image.onload = () => {
            this.drawImages(ctx);
            return;
        };
        this.drawImages(ctx);
    }

    drawImages(ctx){
        if (this.type === "user") {
            ctx.drawImage(this.image, 0, 0, 24, 40, this.x, this.y, 36, 60);
        } else if (this.type === "bot") {
            ctx.drawImage(this.image, 0, 0, 75, 75, this.x, this.y, 75, 75);
        } else if (this.type === "floor") {
            ctx.drawImage(this.image, 0, 0, 237, 237, this.x, this.y, 100, 100);
        } else if (this.type === "wall-top") {
            ctx.drawImage(this.image, 24, 0, 24, 24, this.x, this.y, 24, 24);
        } else if (this.type === "wall-left") {
            ctx.drawImage(this.image, 0, 24, 24, 24, this.x, this.y, 24, 24);
        } else if (this.type === "wall-cross") {
            ctx.drawImage(this.image, 24, 24, 24, 24, this.x, this.y, 24, 24);
        } else if (this.type === "wall-right") {
            ctx.drawImage(this.image, 48, 24, 24, 24, this.x, this.y, 24, 24);
        } else if (this.type === "wall-down") {
            ctx.drawImage(this.image, 24, 48, 24, 24, this.x, this.y, 24, 24);
        } else if (this.type === "wall-horz") {
            ctx.drawImage(this.image, 48, 0, 24, 24, this.x, this.y, 24, 24);
        } else if (this.type === "wall-vert") {
            ctx.drawImage(this.image, 48, 48, 24, 24, this.x, this.y, 24, 24);
        }
    }
}

export default Sprite;