import Level from './level';

class Display {

    constructor() {
        this.levelNum = 0;
        this.dead = false;
    }

    draw(ctx){
        this.level = new Level(LEVELS[this.levelNum]);
        this.dead = this.level.dead;
        this.level.draw(null, ctx);
        this.level.setKeyListeners();
    }

    update () {
        this.won = this.level.won;
        this.dead = this.level.dead;
    }

    reset (ctx, next) {
        if (next) {
            this.levelNum += 1;
            this.level = new Level(LEVELS[this.levelNum]);
        } else {
            this.level = new Level(LEVELS[this.levelNum]);
        }
        this.level.draw(null, ctx);
        this.level.setKeyListeners();
        this.dead = false;
        this.level.dead = false;
    }

    removeKeyListeners() {
        this.level.removeCharListeners();
        this.level.removeKeyListeners();
    }
}

export default Display;

const LEVEL_ONE = [
    {0: 0, 1: 30, 2: 10, 3: 60},
    {0: 0, 1: 140, 2: 10, 3: 500},
    {0: 0, 1: 30, 2: 720, 3: 10},
    {0: 0, 1: 635, 2: 720, 3: 10},
    {0: 710, 1: 30, 2: 10, 3: 610},  
    {0: 255, 1: 540, 2: 10, 3: 105},
    {0: 0, 1: 335, 2: 360, 3: 10},
    {0: 555, 1: 140, 2: 10, 3: 200},
    {0: 405, 1: 190, 2: 10, 3: 100},
    {0: 460, 1: 135, 2: 105, 3: 10},
    {0: 455, 1: 135, 2: 10, 3: 55},
    {0: 455, 1: 390, 2: 10, 3: 255},
    {0: 610, 1: 485, 2: 100, 3: 10},
    {0: 110, 1: 185, 2: 200, 3: 10},
];

const LEVEL_ONE_CHARS = [
    {0: 610, 1: 50},
    {0: 360, 1: 250}
];

const LEVEL_ONE_EXIT = Object.freeze({0: 10, 1: 50});

const LEVEL_TWO = [
    {0: 0, 1: 30, 2: 10, 3: 610},
    {0: 0, 1: 30, 2: 720, 3: 10},
    {0: 0, 1: 635, 2: 720, 3: 10},
    {0: 710, 1: 140, 2: 10, 3: 500},  
    {0: 710, 1: 30, 2: 10, 3: 60},  
    {0: 105, 1: 140, 2: 10, 3: 400},  
    {0: 205, 1: 30, 2: 10, 3: 110},  
    {0: 205, 1: 190, 2: 10, 3: 200},  
    {0: 160, 1: 235, 2: 50, 3: 10},  
    {0: 605, 1: 90, 2: 10, 3: 250},  
    {0: 105, 1: 535, 2: 510, 3: 10},  
    {0: 305, 1: 90, 2: 10, 3: 50},  
    {0: 305, 1: 85, 2: 60, 3: 10},  
    {0: 355, 1: 90, 2: 10, 3: 50},  
    {0: 605, 1: 390, 2: 10, 3: 150},  
    {0: 305, 1: 440, 2: 10, 3: 100},  
    {0: 360, 1: 435, 2: 150, 3: 10},  
    {0: 360, 1: 390, 2: 10, 3: 50},    
    {0: 505, 1: 190, 2: 10, 3: 100},  
];

const LEVEL_TWO_CHARS = [
    {0: 60, 1: 500},
    {0: 610, 1: 350},
    {0: 410, 1: 450}
];

const LEVEL_TWO_EXIT = Object.freeze({ 0: 710, 1: 50 });

const LEVEL_THREE = [
    { 0: 0, 1: 30, 2: 10, 3: 610 },
    { 0: 0, 1: 635, 2: 560, 3: 10 },
    { 0: 610, 1: 635, 2: 560, 3: 10 },
    { 0: 0, 1: 30, 2: 720, 3: 10 },
    { 0: 710, 1: 30, 2: 10, 3: 610 },
    { 0: 155, 1: 140, 2: 10, 3: 100 },
    { 0: 260, 1: 135, 2: 100, 3: 10 },
    { 0: 55, 1: 340, 2: 10, 3: 100 },
    { 0: 55, 1: 435, 2: 55, 3: 10 },
    { 0: 355, 1: 440, 2: 10, 3: 200 },
    { 0: 355, 1: 435, 2: 55, 3: 10 },
    { 0: 405, 1: 140, 2: 10, 3: 50 },
    { 0: 405, 1: 185, 2: 55, 3: 10 },
    { 0: 255, 1: 390, 2: 10, 3: 50 },
    { 0: 455, 1: 240, 2: 10, 3: 205 },
    { 0: 455, 1: 235, 2: 55, 3: 10 },
];

const LEVEL_THREE_CHARS = [
    { 0: 110, 1: 50 },
    { 0: 560, 1: 100 },
    { 0: 160, 1: 300 },
    { 0: 360, 1: 500 },
];

const LEVEL_THREE_EXIT = Object.freeze({ 0: 560, 1: 600 });


const LEVELS = [
    {level: LEVEL_ONE, charPos: LEVEL_ONE_CHARS, exit: LEVEL_ONE_EXIT},
    {level: LEVEL_TWO, charPos: LEVEL_TWO_CHARS, exit: LEVEL_TWO_EXIT},
    {level: LEVEL_THREE, charPos: LEVEL_THREE_CHARS, exit: LEVEL_THREE_EXIT},
];

LEVELS.forEach(level => {
    level.level.forEach(Object.freeze);
    level.charPos.forEach(Object.freeze);
});


