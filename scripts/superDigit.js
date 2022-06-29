console.log(superDigit('9875', 4))

function superDigit(n, k) { //Works but slowly, times out on big numbers
    let number=n
    // Write your code here
    for(let i=0; i<k-1; i++){
        number+=n
    }
    if(number.length===1)return number
    
    let arrayOfDigits;
    while(number.length>1){
        arrayOfDigits=number.split('').map(x=>+x);
        number=''+(arrayOfDigits.reduce(((a,b)=>a+b),0))
    }
    return number;
}

//n='9875'
//k=4