import Character from './character';

 class Level {
    draw(ctx) {
        const char = new Character();
        char.draw(ctx);
    }
 }

 export default Level;