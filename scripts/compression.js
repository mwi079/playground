const compress = function(chars) {
    
    let currentChar=chars[0]
    let count=0;
    const s=[];
 
    for(const [index,char] of chars.entries()){
        if(char===currentChar && index!==chars.length-1){
            count++
          
        }
        else if(char!==currentChar || index===chars.length-1){
            if(index===chars.length-1){
                count++;
            }
            if(count===1){
                s.push(currentChar)
            }
            else{
                s.push(currentChar)
                const digits=String(count).split('')
                for(const digit of digits){
                    s.push(digit)
                }
                
            }
            count=1; 
            currentChar=char;
            
        }
        
    }
    
    chars=s;
   
    return chars.length;
};

compress(["a","a","b","b","c","c","c"])

//! ["a","2","b","2","c","3"]

