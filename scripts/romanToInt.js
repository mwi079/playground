const romanToInt = function(s) {
    let int=0;
    for(let i=0; i<s.length; i++){
        if(s[i]==='M'){
            int+=1000;
        }
        if(s[i]==='D'){
            int+=500;
        }
        if(s[i]==='C'){
            if(s[i+1]==='M'){
                int+=900;
                i++;
                continue;
            }
            else if(s[i+1]==='D'){
                int+=400;
                i++;
                continue;
            }
            else{
                int+=100;
            }
        }
        if(s[i]==='L'){
            int+=50;
        }
        if(s[i]==='X'){
            if(s[i+1]==='L'){
                int+=40;
                i++;
                continue;
            }
            else if(s[i+1]==='C'){
                int+=90;
                i++;
                continue;
            }
            else{
                int+=10;
            }
        }
        if(s[i]==='V'){
            int+=5
        }
        if(s[i]==='I'){
            if(s[i+1]==='V'){
                int+=4;
                i++;
                continue;
            }
            else if(s[i+1]==='X'){
                int+=9;
                i++;
                continue;
            }
            else{
                int++;
            }
        }
    }
    return int;
};