import {rotate} from "./matrix"
export class Box{
    shape:number[][]
    x:number
    y:number
    type:any
    constructor(){
        this.x=0
        this.y=0
        this.type=1
        this.shape=[
            [1,1],
            [1,1],
        ]
    }
    rotate(){
        this.shape=rotate(this.shape)
    }
}
const boxInfos:any={
    1:{
        type:1,
        shape:[
            [1,1],
            [1,1],
        ]
    },
    2:{
        type:2,
        shape:[
            [1,0,0],
            [1,1,0],
            [0,1,0]
        ]
    },
    3:{
        type:3,
        shape:[
            [1,0,0],
            [1,0,0],
            [1,0,0]
        ]
    },
    4:{
        type:4,
        shape:[
            [0,0,0],
            [0,1,0],
            [1,1,1]
        ]
    }
}
export function createBox(){
    const box=new Box()
    
    const max=Object.keys(boxInfos).length
    const type=Math.floor(Math.random()*max)+1
    const {shape}=boxInfos[type]
    box.shape=shape

    // box.shape=boxInfos[type].shape
    return box
}