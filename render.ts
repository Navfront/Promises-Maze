export function renderMaze(initMaze:number[][]):void {
  const canvas = document.querySelector<HTMLCanvasElement>('.maze')
if (canvas?.getContext('2d') != null) {
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  
  for (let y = 0; y < initMaze.length; y++){
    for (let x = 0; x < initMaze[0].length; x++){
      if (initMaze[y][x] === 1) {
        wall(ctx, x, y)
      }
    }
  }
}
}

export function wall(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  console.log(x, y);
  
  ctx.beginPath()
  ctx.fillStyle = 'gray'
  ctx.fillRect(x*50, y*50, 50, 50)
}

