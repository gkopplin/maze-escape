import Level from './level';

const LEVEL_ONE = [
    [40,40,10,50],
    [0,0,10,600],
    [0,0,700,10],
    [0,590,700,10],
    [690,30,10,700]
];

const LEVEL_ONE_CHARS = [
    [20, 20, 10, 10],
    [500, 500, 10, 10]
];

class Display {
    draw(ctx){
        const level = new Level(LEVEL_ONE, LEVEL_ONE_CHARS);
        level.draw(ctx);
        level.setKeyListeners();
    }
}

export default Display;