export function renderMaze(initMaze) {
    const canvas = document.querySelector('.maze');
    if ((canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d')) != null) {
        const ctx = canvas.getContext('2d');
        for (let y = 0; y < initMaze.length; y++) {
            for (let x = 0; x < initMaze[0].length; x++) {
                if (initMaze[y][x] === 1) {
                    wall(ctx, x, y);
                }
            }
        }
    }
}
export function wall(ctx, x, y) {
    console.log(x, y);
    ctx.beginPath();
    ctx.fillStyle = 'gray';
    ctx.fillRect(x * 50, y * 50, 50, 50);
}
