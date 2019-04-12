class Sprite {
    constructor (options) {
        this.x = options.x;
        this.y = options.y;
        this.type = options.type;

        if (this.type === "user") {
            this.image = new Image();
            this.image.src = "assets/Mike Tyson.png";
        } else {
            this.image = new Image();
            this.image.src = "assets/jason.png";
        }
    }
    
    draw (ctx) {
        this.image.onload = () => {
            if (this.type === "user") {
                ctx.drawImage(this.image, 250, 0, 50, 115, this.x, this.y, 40, 80);
            } else {
                ctx.drawImage(this.image, 191, 115, 31, 70, this.x, this.y, 40, 80);
            }
        };
    }
}

export default Sprite;