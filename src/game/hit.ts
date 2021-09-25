import { getBottomPoints } from "./matrix"

export function hitBottomBoundary(box:any,map:any){
    const points=getBottomPoints(box.shape)
    //point.y(方块自身的高度)+box.y(方块离顶部的高度)+1(预判下一步)
    const mapRow=map.length
    return points.some((point:any)=>{
        return point.y+box.y+1>mapRow
    })
}
export function hitOtherBottom(box:any,map:any){
    const points=getBottomPoints(box.shape)
    //point.y(方块自身的高度)+box.y(方块离顶部的高度)+1(预判下一步)
    //为什么 不能预判加一 加一报错
    return points.some((point:any)=>{

        const row=point.y+box.y;
        const col=point.x+box.x;
        return map[row][col]===-1
    })
    
}