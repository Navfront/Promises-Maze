import { iam } from './render.js'
const canvas = document.querySelector<HTMLCanvasElement>('.maze')
const ctx = canvas?.getContext('2d') as CanvasRenderingContext2D

export type State = {
    x: number,
    y: number,
    getPosition: ()=>{x:number, y: number}
    left: () => Promise<State>
    right: () => Promise<State>
    top: () => Promise<State>
    bottom: () => Promise<State>
    isEnd: ()=>boolean
}

export function promisifyMaze(maze: number[][]): Promise<State> {
    
    const getStartPoint = (): {startX:number,startY:number} => {
        let start = {startX: 0, startY: 0}
        maze.forEach((y, index) => {
            if (y.includes(2)) {
                start.startX = y.indexOf(2)
                start.startY = index
            }
        })
        return start
    }

    const {startX, startY} = getStartPoint()
    
    const state = {
        x: startX,
        y: startY,
        getPosition: function (this: State) { return { x: this.x, y: this.y } },
        left: function(this: State){
            if (maze[this.y][this.x - 1] !== undefined && maze[this.y][this.x - 1] !== 1) {
                console.log(`Going to ${this.x - 1}-${this.y}`);
                iam(ctx,this.x - 1, this.y)
                return Promise.resolve({...this, x: this.x - 1})
            } else console.log(`Can't left`);
             return Promise.resolve({...this})
        },
        right: function (this: State) {        
            if (maze[this.y][this.x + 1] !== undefined && maze[this.y][this.x + 1] !== 1) {
                console.log(`Going to ${this.x + 1}-${this.y}`);
                iam(ctx,this.x + 1, this.y)
                return Promise.resolve({...this, x: this.x + 1})
            } else console.log(`Can't right`);
            return Promise.resolve({...this})
        },
        top: function(this: State){
            if (this.y > 0 && maze[this.y - 1][this.x] !== 1) {
                console.log(`Going to ${this.x}-${this.y - 1}`);
                iam(ctx,this.x, this.y - 1)
                return Promise.resolve({ ...this, y: this.y - 1 })
            } else console.log(`Can't top`);
            return Promise.resolve({...this})
        },
        bottom: function(this: State){
            if (this.y < maze.length - 1 &&  maze[this.y + 1][this.x] !== 1) {
                console.log(`Going to ${this.x}-${this.y + 1}`);
                iam(ctx,this.x, this.y + 1)
                return Promise.resolve({...this, y: this.y + 1})
            } else console.log(`Can't bottom`);
            return Promise.resolve({...this})
        },
        isEnd: function(this: State){return Boolean(maze[this.y][this.x] === 3)},


    }
    return new Promise(resolve=>resolve(state))
}

