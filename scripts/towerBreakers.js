function towerBreakers(n, m) { // works but slowly 
    const towers=new Array(n).fill(m)
    let player1=true
    
        for(let i=0; i<n; i++){
            for( let j=m; j>0; j--){
                if(towers[i]===1) continue
                if(j<towers[i]&&j%m===0) {
                    towers[i]-=m
                    player1=!player1
                    break
                }
                if(j===1) {
                    towers[i]=1
                    player1=!player1
                    break
                }
            }
        }
    return player1?2:1

    
}

console.log(towerBreakers(2,2))

function towerBreakers2(n, m) { // Much more perfomant
   
    if(m===1) return 2
    if(n%2===0)  return 2
    return 1

    
}

