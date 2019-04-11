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
                ctx.drawImage(this.image, 250, 0, 100, 100, this.x, this.y, 100, 100);
            } else {
                ctx.drawImage(this.image, 190, 115, 100, 100, this.x, this.y, 100, 100);
            }
        };
    }
}

export default Sprite;