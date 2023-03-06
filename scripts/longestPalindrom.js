// function longestPalindrome (s) { //! SLOW
    
    
//     let longest='';

//     for (let i = 0; i < s.length; i++) {
//         for (let j = i + 1; j < s.length + 1; j++) {
//             const substring=s.slice(i, j)
//             if(isPalindrome(substring) && substring.length>longest.length){
//                 longest=substring;
//             }
//         }
//     }
//     return longest;
// };


// function isPalindrome(s){
//     if(s===s.split('').reverse().join(''))return true;
//     return false;
// }

const longestPalindrome = function(s) {
    let res = "";
    let max = 0;

    for(let i = 0; i < s.length; i++){
        for(let j = 0; j <= 1; j++){
            let l = i;
            let r = i + j;

            while(l >= 0 && r < s.length && s[l] === s[r]){ //! only continue while left letter === right letter 
                let len = r - l + 1;
                if(len > max){
                    res = s.substring(l, r + 1);
                    max = len;
                }
                l--;
                r++;
            }
        }
    }
    return res;
};