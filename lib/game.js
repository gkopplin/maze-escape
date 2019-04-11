import Display from './display';

document.addEventListener('DOMContentLoaded', () => {

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const display = new Display();
    display.draw(ctx);
});