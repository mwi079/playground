function caesarCipher(s, k) {
    const stringArr=s.split('');
    for(let i=0; i<stringArr.length; i++){
        const letter=s.charCodeAt(i)
        if((letter>=65 &&letter<=90) || (letter>=97&&letter<=122)){
            if(+letter+k>90 && letter<=90){ //upper
                stringArr[i]=String.fromCharCode(((letter-65+k)%26)+65)
            }
            else if(+letter+k>122){//lower
                stringArr[i]=String.fromCharCode(((letter-97+k)%26)+97)
            }
            else{
                stringArr[i]=String.fromCharCode(+letter+k)
            }
        }
    }
    return stringArr.join('')

}
module.exports=caesarCipher

console.log(caesarCipher('middle-Outz',2))