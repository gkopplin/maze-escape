import Level from './level';

class Display {
    draw(ctx){
        const level = new Level(LEVEL_ONE, LEVEL_ONE_CHARS);
        level.draw(ctx);
        level.setKeyListeners();
    }
}

export default Display;

const LEVEL_ONE = [
    [0, 0, 20, 600],
    [0, 0, 700, 20],
    [300, 580, 700, 20],
    [0, 580, 260, 20],
    [680, 10, 20, 600],  

    [240, 480, 20, 160],
    // [250, 480, 150, 10],
    // [200, 100, 400, 10],
    // [200, 100, 10, 100],
    // [120, 180, 10, 50],
    // [120, 230, 50, 10],
    [600, 100, 20, 200],
    // [570, 300, 40, 10],
    // [500, 400, 10, 200],
    // [450, 400, 100, 10],
    [0, 320, 360, 20],
];

const LEVEL_ONE_CHARS = [
    [640, 20],
    [380, 240]
];
