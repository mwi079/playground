const fight=()=>{
    let people=8000000000
    let fights=0
    while(people>1){
        people=people/2
        console.log(people)
        fights++
    }
    return fights;
}
console.log(fight())