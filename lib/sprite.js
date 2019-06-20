class Sprite {
    constructor (options) {
        this.x = options.x;
        this.y = options.y;
        this.type = options.type;

        if (this.type === "user") {
            this.image = new Image();
            this.image.src = "assets/Mike Tyson.png";
        } else if (this.type === "bot") {
            this.image = new Image();
            this.image.src = "assets/jason.png";
        } else if (this.type === "floor") {
            this.image = new Image();
            this.image.src = "assets/tile.png";
        }
    }
    
    draw (ctx) {
        this.image.onload = () => {
            if (this.type === "user") {
                ctx.drawImage(this.image, 250, 0, 50, 115, this.x, this.y, 40, 80);
            } else if (this.type === "bot") {
                ctx.drawImage(this.image, 191, 115, 31, 70, this.x, this.y, 40, 80);
            } else if (this.type === "floor") {
                ctx.drawImage(this.image, 0, 0, 48, 48, this.x, this.y, 100, 100);
            }
        };
    }
}

export default Sprite;