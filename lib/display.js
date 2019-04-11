import Level from './level';

const LEVEL_ONE = [
    [40,40,10,50],
    [0,0,10,600],
    [0,0,700,10],
    [0,590,700,10],
    [690,30,10,700]
];

class Display {
    draw(ctx){
        const level = new Level(LEVEL_ONE);
        level.draw(ctx);
    }
}

export default Display;