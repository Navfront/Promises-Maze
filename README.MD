# **Promises-Maze**

### Ссылка на GH-Pages: https://navfront.github.io/Promises-Maze/

## Дано:

При вызове функции `promisifyMaze()` нам возвращается обьект промиса следующей структуры:

`export type State = {`\
&nbsp;&nbsp;`    x: number,`\
&nbsp;&nbsp;`    y: number,`\
&nbsp;&nbsp;`    getPosition: ()=>{x:number, y: number}`\
&nbsp;&nbsp;`    left: () => Promise<State>`\
&nbsp;&nbsp;`    right: () => Promise<State>`\
&nbsp;&nbsp;`    top: () => Promise<State>`\
&nbsp;&nbsp;`    bottom: () => Promise<State>`\
&nbsp;&nbsp;`    isEnd: ()=>boolean`\
`}`

## Задача:

Пройти лабиринт с помощью методов `left() right() top() bottom()`, возвращающих тот же обьект промиса, но с новыми координатами если ход был произведен, либо со старыми, если ходить в данном направлении нельзя.

Метод `isEnd()` говорит нам, находимся ли мы на финише.
Метод `getPosition()` возвращает текущие координаты.
