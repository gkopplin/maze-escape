import Level from './level';

class Display {
    draw(ctx){
        const level = new Level();
        level.draw(ctx);
    }
}

export default Display;