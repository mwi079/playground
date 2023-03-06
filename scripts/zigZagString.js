function convert(s, numRows) {
    if(numRows===1) return s;

    let currentRow=1;
    let headingDown=true;
    const array=[];

    for(let i=0; i<numRows; i++){
        array[i]=[];
    }

    for(let i=0; i<s.length; i++){
        array[currentRow-1].push(s[i])

        if(headingDown){
            currentRow++;

            if(currentRow>numRows){
                currentRow=numRows-1
                headingDown=false;
            }
        }
        else{
            currentRow--;

            if(currentRow<1){
                currentRow=2;
                headingDown=true;
            }
        }
    }
    let zigZagString='';

    for (let i=0; i<numRows; i++) {
        zigZagString+=array[i].join('')
    }

    return zigZagString;
};