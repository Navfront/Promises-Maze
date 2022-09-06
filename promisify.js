import { iam } from './render.js';
const canvas = document.querySelector('.maze');
const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
export function promisifyMaze(maze) {
    const state = {
        x: 1,
        y: 0,
        getPosition: function () { return { x: this.x, y: this.y }; },
        left: function () {
            if (maze[this.y][this.x - 1] !== undefined && maze[this.y][this.x - 1] !== 1) {
                console.log(`Going to ${this.x - 1}-${this.y}`);
                iam(ctx, this.x, this.y);
                return Promise.resolve(Object.assign(Object.assign({}, this), { x: this.x - 1 }));
            }
            else
                console.log(`Can't left`);
            return Promise.resolve(Object.assign({}, this));
        },
        right: function () {
            if (maze[this.y][this.x + 1] !== undefined && maze[this.y][this.x + 1] !== 1) {
                console.log(`Going to ${this.x + 1}-${this.y}`);
                iam(ctx, this.x, this.y);
                return Promise.resolve(Object.assign(Object.assign({}, this), { x: this.x + 1 }));
            }
            else
                console.log(`Can't right`);
            return Promise.resolve(Object.assign({}, this));
        },
        top: function () {
            if (this.y > 0 && maze[this.y - 1][this.x] !== 1) {
                console.log(`Going to ${this.x}-${this.y + 1}`);
                iam(ctx, this.x, this.y);
                return Promise.resolve(Object.assign(Object.assign({}, this), { y: this.y - 1 }));
            }
            else
                console.log(`Can't top`);
            return Promise.resolve(Object.assign({}, this));
        },
        bottom: function () {
            if (this.y < maze.length - 1 && maze[this.y + 1][this.x] !== 1) {
                console.log(`Going to ${this.x}-${this.y - 1}`);
                iam(ctx, this.x, this.y);
                return Promise.resolve(Object.assign(Object.assign({}, this), { y: this.y + 1 }));
            }
            else
                console.log(`Can't bottom`);
            return Promise.resolve(Object.assign({}, this));
        },
        isEnd: function () { return Boolean(maze[this.y][this.x] === 3); },
    };
    return new Promise(resolve => resolve(state));
}
