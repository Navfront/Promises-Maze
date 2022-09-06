export function renderMaze(initMaze) {
    const canvas = document.querySelector('.maze');
    if ((canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d')) != null) {
        const ctx = canvas.getContext('2d');
        for (let y = 0; y < initMaze.length; y++) {
            for (let x = 0; x < initMaze[0].length; x++) {
                // walls
                if (initMaze[y][x] === 1) {
                    block(ctx, x, y);
                }
                // start
                if (initMaze[y][x] === 2) {
                    block(ctx, x, y, 'lightgreen');
                }
                // finish
                if (initMaze[y][x] === 3) {
                    block(ctx, x, y, 'lightpink');
                }
            }
        }
    }
}
function block(ctx, x, y, color = 'gray') {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(x * 50, y * 50, 50, 50);
}
export function iam(ctx, x, y, color = 'rgba(200,100,30,0.3)') {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(x * 50, y * 50, 50, 50);
}
