import { renderMaze } from './render.js'
import { promisifyMaze, State } from './promisify.js'
const WALK_DELAY_MS = 100 

const button = document.querySelector<HTMLButtonElement>('.run');



const initMaze = [
  [2, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0],
  [1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
  [0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0 ,0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1],
  [0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [3, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0],
]

renderMaze(initMaze)

const delay = (cb: ()=>void):void=>{
  setTimeout(()=>{return cb()}, WALK_DELAY_MS)
}

type ArrPos = number[]

let isEnd = false

async function run(promise: ReturnType<typeof promisifyMaze>, hist: ArrPos[] = []): Promise<State | undefined > {
  const p = await promise;
  const curr = p.getPosition()
  if (!findEqHist(curr.x, curr.y)) {
    hist.push([curr.x, curr.y])
  }

  function findEqHist(x: number, y: number): undefined | ArrPos {
    return hist.find(it=>it[0]===x&&it[1]===y)
  }

  if (p.isEnd()) {
    alert('WIN!')
    isEnd = p.isEnd()
  } 

  if (isEnd) {
    return undefined
  }

  if (!findEqHist(p.x + 1, p.y)) {
    hist.push([p.x + 1, p.y]);
    delay(() => { run(p.right(), hist) })
  }
  if (!findEqHist(p.x, p.y + 1)) {
    hist.push([p.x, p.y + 1]);
    delay(() => { run(p.bottom(), hist) })
  }
  if (!findEqHist(p.x, p.y - 1)) {
    hist.push([p.x , p.y - 1]);
    delay(() => { run(p.top(), hist) })
  }
  if (!findEqHist(p.x - 1, p.y)) {
    hist.push([p.x - 1, p.y]);
    delay(() => { run(p.left(), hist) })
  }
    return undefined
}


button?.addEventListener('click', () => {
  isEnd = false
  renderMaze(initMaze)
  run(promisifyMaze(initMaze))
})


