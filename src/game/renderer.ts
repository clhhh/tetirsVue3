
export function render(box:any,map:any){
    //对map进行一个重置
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[0].length; j++) {
        if(map[i][j]==1)
          map[i][j]=0       
        }   
    }
//box=>map=>1
for (let i = 0; i < box.shape.length; i++) {
    for (let j = 0; j < box.shape[0].length; j++) {
    let row=i+box.y
    let col=j+box.x
      if(box.shape[i][j]>0){
        map[row][col]=1 
      }
            
    }   
}
}