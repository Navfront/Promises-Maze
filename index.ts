import {wall, renderMaze} from './render.js'

const initMaze = [
  [1, 0, 0, 1, 1, 0, 0, 0, 1, 0],
  [0, 0, 1, 1, 1, 0, 1, 0, 0, 0],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
  [0, 0, 0, 1, 1, 0, 1, 0, 0, 1],
  [0, 1, 0, 1, 1, 0, 1, 1, 0, 1],
  [0, 1, 0, 1, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 1, 0, 0],
]

renderMaze(initMaze)




