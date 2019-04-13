import Level from './level';

class Display {

    draw(ctx){
        this.level = new Level(LEVEL_ONE, LEVEL_ONE_CHARS);
        this.dead = this.level.dead;
        this.level.draw(null, ctx);
        this.level.setKeyListeners();
    }

    updateDead () {
        this.dead = this.level.dead;
    }

    restart (ctx) {
        this.level.removeCharListeners();
        this.level.removeKeyListeners();
        this.level = new Level(LEVEL_ONE, LEVEL_ONE_CHARS);
        this.level.draw(null, ctx);
        this.level.setKeyListeners();
        this.dead = false;
        this.level.dead = false;
    }
}

export default Display;

const LEVEL_ONE = [
    {0: 0, 1: 30, 2: 10, 3: 610},
    {0: 0, 1: 30, 2: 260, 3: 10},
    {0: 310, 1: 30, 2: 560, 3: 10},
    {0: 0, 1: 635, 2: 720, 3: 10},
    {0: 710, 1: 30, 2: 10, 3: 610},  
    {0: 255, 1: 540, 2: 10, 3: 105},
    {0: 0, 1: 335, 2: 360, 3: 10},
    {0: 555, 1: 140, 2: 10, 3: 200},
    {0: 405, 1: 190, 2: 10, 3: 100},
    {0: 460, 1: 135, 2: 105, 3: 10},
    {0: 455, 1: 135, 2: 10, 3: 55},
    {0: 455, 1: 385, 2: 10, 3: 255},
    {0: 610, 1: 485, 2: 100, 3: 10},
    {0: 110, 1: 185, 2: 200, 3: 10},
];

const LEVEL_ONE_CHARS = [
    {0: 610, 1: 50},
    {0: 360, 1: 300}
];

LEVEL_ONE_CHARS.forEach(Object.freeze);
LEVEL_ONE.forEach(Object.freeze);
