const brackets=(string)=>{
  
    let left=0;
    let right=0;
    const arr=string.split('')

    for(let i=0; i<arr.length; i++){
        if(arr[i]==='<'&& arr[i+1]==='>') i++
        else{
            if(arr[i]==='>') left++
            else right++
        }
    }
    for (let i=0; i<left; i++){
        arr.unshift('<')
    }

    for (let i=0; i<right; i++){
        arr.unshift('>')
    }
    return arr.join('')

}

console.log(brackets('<>>'))