export function getBottomPoints(matrix:any){
    const points:any=[]
    const row=matrix.length
    matrix[row-1].forEach((v:any,j:any)=>{
    // matrix.forEach((v:any,j:any)=>{
    if(matrix[row-1][j] >0 ){
        points.push({
            //留了旋转区域
             x:j,          
             y:row
         })
    }     
    })
    //倒数第二行
    matrix[row-2].forEach((v:any,j:any)=>{
        // matrix.forEach((v:any,j:any)=>{
        if(matrix[row-2][j] >0 ){
            points.push({              
                 x:j,          
                 y:row-1
             })
        }     
    })
    // console.log(points)
    return points
}
export function rotate(matrix:any){
    let temp:any=[]
    const row=matrix.length
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
           const newRow = row - 1 - j

           if(!temp[newRow]){
               temp[newRow]=[]
           }

           temp[newRow][i]=matrix[i][j];
            
        }  
    }
    return temp
}