function gridChallenge(grid){
    
    const sorted=grid.map(x=>x.split('').sort((a,b)=>a>b?1:-1))
    console.log(sorted)
    for(let i=0; i<grid.length-1; i++){
        for(let j=0; j<grid.length; j++){
            console.log(sorted[i][j]>sorted[i+1][j])
            console.log(sorted[i][j],sorted[i+1][j])
            if(sorted[i][j]>sorted[i+1][j])return 'NO'
        }
    }
    return 'YES'

}

console.log(gridChallenge([ 'uxf', 'vof', 'hmp']))