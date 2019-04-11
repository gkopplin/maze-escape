import Level from './level';

const LEVEL_ONE = [
    [0,0,10,600],
    [0,0,700,10],
    [0,590,700,10],
    [690,30,10,700],
    [50, 50, 10, 50],
    [50, 50, 50, 10],
    [10,200, 50, 10],
    [250, 100, 10, 70],
    [300, 200, 50, 10],
    [350, 350, 10, 50],
    [350, 400, 50, 10],
    [300, 10, 10, 50],
    [500, 50, 10, 50],
    [450, 50, 50, 10]
];

const LEVEL_ONE_CHARS = [
    [20, 20, 10, 10],
    [300, 300, 10, 10]
];

class Display {
    draw(ctx){
        const level = new Level(LEVEL_ONE, LEVEL_ONE_CHARS);
        level.draw(ctx);
        level.setKeyListeners();
    }
}

export default Display;