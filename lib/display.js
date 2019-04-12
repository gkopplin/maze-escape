import Level from './level';

class Display {
    drawGrid (ctx) {
        GRID.forEach(line => {
            ctx.beginPath();
            ctx.rect(line[0],
                line[1],
                line[2],
                line[3]);
                ctx.fillStyle = "#F1F1F1";
                ctx.fill();
                ctx.closePath();
        });
    }

    draw(ctx){
        const level = new Level(LEVEL_ONE, LEVEL_ONE_CHARS);
        level.draw(ctx);
        this.drawGrid(ctx);
        level.setKeyListeners();
    }
}

export default Display;

const GRID = [];
for(let i = 0; i <= 700; i= i+50){
    GRID.push([i, 0, 1, 700]);
}
for(let i = 0; i <= 700; i= i+50){
    GRID.push([0, i, 700, 1]);
}

const LEVEL_ONE = [
    [0, 0, 10, 610],
    [0, 0, 710, 10],
    [300, 600, 710, 10],
    [0, 600, 250, 10],
    [700, 10, 10, 700],  

    // [250, 480, 150, 10],
    // [200, 100, 400, 10],
    // [200, 100, 10, 100],
    // [120, 180, 10, 50],
    // [120, 230, 50, 10],
    // [570, 300, 40, 10],
    // [500, 400, 10, 200],
    // [450, 400, 100, 10],

    // [250, 480, 10, 160],
    // [0, 320, 360, 10],
    // [580, 100, 10, 200],
];

const LEVEL_ONE_CHARS = [
    [640, 20],
    [380, 240]
];
