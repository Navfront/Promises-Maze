export function renderMaze(initMaze:number[][]):void {
  const canvas = document.querySelector<HTMLCanvasElement>('.maze')
if (canvas?.getContext('2d') != null) {
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  
  for (let y = 0; y < initMaze.length; y++){
    for (let x = 0; x < initMaze[0].length; x++){
      // walls
      if (initMaze[y][x] === 1) {
        block(ctx, x, y)
      }
      // start
      if (initMaze[y][x] === 2) {
        block(ctx,x,y,'lightgreen')
      }
      // finish
      if (initMaze[y][x] === 3) {
        block(ctx,x,y,'lightpink')
      }
    }
  }
}
}

function block(ctx: CanvasRenderingContext2D, x: number, y: number, color: string= 'gray'): void {
  ctx.beginPath()
  ctx.fillStyle = color
  ctx.fillRect(x*20, y*20, 20, 20)
}

export function iam(ctx: CanvasRenderingContext2D, x: number, y: number, color: string = 'rgba(200,100,30,0.3)'): void {
  ctx.beginPath()
  ctx.fillStyle = color
  ctx.fillRect(x*20, y*20, 20, 20)
}
