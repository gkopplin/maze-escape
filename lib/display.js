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
    [0, 0, 10, 620],
    [0, 0, 720, 10],
    [310, 610, 720, 10],
    [0, 610, 260, 10],
    [710, 10, 10, 710],  
    // [160, 105, 405, 10],

    // [250, 480, 150, 10],
    // [200, 100, 10, 100],
    // [120, 180, 10, 50],
    // [120, 230, 50, 10],
    // [570, 300, 40, 10],
    // [500, 400, 10, 200],
    // [450, 400, 100, 10],

    [255, 510, 10, 160],
    [0, 305, 360, 10],
    [555, 110, 10, 200],
    [555, 110, 200, 10]
];

const LEVEL_ONE_CHARS = [
    [610, 20],
    [360, 270]
];
