import { renderMaze } from './render.js';
import { promisifyMaze } from './promisify.js';
const initMaze = [
    [1, 2, 0, 1, 1, 0, 0, 0, 1, 3],
    [0, 0, 1, 1, 1, 0, 1, 0, 0, 0],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
    [0, 0, 0, 1, 1, 0, 1, 0, 0, 1],
    [0, 1, 0, 1, 1, 0, 1, 1, 0, 1],
    [0, 1, 0, 1, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 1, 0, 0],
];
renderMaze(initMaze);
promisifyMaze(initMaze).then(s => s.left()).then(s => s.bottom()).then(s => s.bottom())
    .then(s => s.bottom()).then(s => s.bottom());
