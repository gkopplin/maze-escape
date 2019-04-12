import Display from './display';

document.addEventListener('DOMContentLoaded', () => {
    const KEYS = [
        "Right",
        "Left",
        "Up",
        "Down",
        "ArrowRight",
        "ArrowLeft",
        "ArrowUp",
        "ArrowDown"
    ];

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const display = new Display();
    const root = document.getElementById('root');
    
    const render = ({canvas, display, root, e}) => {
        if (!e || KEYS.includes(e.key)) {
            display.updateDead();
            if (display.dead) {
                canvas.classList.add("hidden");
                root.classList.remove("hidden");
                root.innerHTML = "<p>you dead.</p>";
        
            } else {
                root.classList.add("hidden");
                canvas.classList.remove("hidden");
            }
        }
    };

    display.draw(ctx);

    document.addEventListener("keydown", (e) => {
        render({canvas, display, root, e});
    });

    
});


