export * from "./config"

import { Box, createBox } from "./box";
import { gameCol, gameRow } from "./config";
import { hitBottomBoundary, hitOtherBottom } from "./hit";
import { addBoxToMap, elimianateline, initMap, isComplete} from "./map"
import { getBottomPoints } from "./matrix";
import { render } from "./renderer";
import { addTicker } from "./ticker";


let _map:any;
export function initGame(map:any){
    _map=map;
    initMap(map);
}
let activeBox :any;
export function startGame(){
    
    //box
    // activeBox=new Box()
    activeBox=createBox()
    activeBox.x=Math.floor(Math.random()*(gameCol-4)+3)
    // activeBox.y=3
    render(activeBox,_map)

    let timeInterval=500
    const isDown=intervalTimer(timeInterval)
//帧循环 一秒执行一次
function handleTicker(n:any){
    // console.log(n)
   
        if(isDown(n)){
            moveDown(activeBox,_map);
        
    }
    
    render(activeBox,_map)
}
addTicker(handleTicker)

window.addEventListener("keydown",(e)=>{
    switch (e.code) {
        case "ArrowLeft":
          //方块向左第一行bug
            (activeBox.x>0
                &&_map[activeBox.y+activeBox.shape.length][activeBox.x+activeBox.shape[0][0]-1]==0)
                ?activeBox.x--:activeBox;
            break;
        case "ArrowRight":
            //方块向右OK
            (activeBox.x<=gameCol-activeBox.shape[0].length
                &&_map[activeBox.y+activeBox.shape.length][activeBox.x+activeBox.shape[0].length]==0)
                ?activeBox.x++:activeBox
            break;
        case "ArrowUp":
            activeBox.rotate();
            break;
        case "ArrowDown":
            moveDown(activeBox,_map)
            moveDown(activeBox,_map)
            break;
    }
    });
}

function intervalTimer(Interval:any){
    let t=0
    return (n:any)=>{
        t+=n
        if(t >= Interval){   
            t=0
            return true      
        }
        return false
    }
}
export function moveDown(box:any,map:any){
   
    //一个点大于就结束
    if(hitBottomBoundary(box,map)||hitOtherBottom(box,map)){
        //box->add map(-1)
        addBoxToMap(box,map)
        
        //消除行
        elimianateline(map);
        
        //创建一个新box
        // activeBox=new Box();
    if(isComplete(_map)){
        activeBox=createBox()
        activeBox.x=Math.floor(Math.random()*(gameCol-4)+3)
    }
        

        return
    }

    box.y++
}


