import {gameCol,gameRow} from "../game";

let score:any=0;
//map
// export const map:any=[]
export function initMap(map:any){
    console.log("测试",score)
try{
    sessionStorage.setItem("score",score);
}catch(e){
    console.log(e,"error")
}

//initmap
for (let i = 0; i < gameRow; i++) {
    let arr=[]
    for (let j = 0; j < gameCol; j++) {
        arr.push(0)
    }
    map.push(arr)
}
}
export function addBoxToMap(box:any,map:any){
    
    //markBoxToMap
        // for (let i = 0; i < map.length; i++) {
        //     for (let j = 0; j < map[0].length; j++) {
        //         if(map[i][j]==1){  
        //             map[i][j]=-1                
        //         }            
        //     }
        // }
        for (let i = 0; i < box.shape.length; i++) {
            for (let j = 0; j < box.shape[0].length; j++) {
                let row=i+box.y
                let col=j+box.x
                if(box.shape[i][j]===1){
                    map[row][col] = -1
                }
                
            }
        }
}
export function elimianateline(map:any){
     //是否可以消除行
        //先获取满行的索引
        const lines=map.reduce((res:any,arr:any,i:any)=>{
            let fulled = arr.every((item:any)=>{
                 return item==-1
             })
             if(fulled){
                 res.push(i)
             }
             return res
         },[]);
         //基于满行索引进行消除
         let row=map[0].length
         if(lines){
            
             lines.forEach((item:any)=>{

                
                try{
                    score+=10
                    console.log(score)
                    sessionStorage.setItem("score",score);
                }catch(e){
                    console.log(e,"error")
                }               
                 map.splice(item,1)
                 map.unshift(new Array(row).fill(0))
             })
         }

}
