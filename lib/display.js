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
    [0, 30, 10, 610],
    [0, 30, 260, 10],
    [310, 30, 560, 10],
    [0, 635, 720, 10],
    [710, 30, 10, 610],  
    [255, 540, 10, 105],
    [0, 335, 360, 10],
    [555, 140, 10, 200],
    [405, 190, 10, 100],
    [460, 135, 105, 10],
    [455, 135, 10, 55],
    [455, 385, 10, 255],
    [610, 485, 100, 10],
    [110, 185, 200, 10],
];

const LEVEL_ONE_CHARS = [
    [610, 50],
    [360, 300]
];
