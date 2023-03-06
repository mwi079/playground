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
    let result = "";
    let max = 0;

    for(let i = 0; i < s.length; i++){
        for(let j = 0; j <= 1; j++){
            let left = i;
            let right = i + j;

            while(left >= 0 && right < s.length && s[left] === s[right]){ //! only continue while left letter === right letter 
                let length = right- left + 1;
                if(length > max){
                    result = s.substring(left, right + 1);
                    max = length;
                }
                left--;
                right++; //! expant until failure
            }
        }
    }
    return result;
};
console.log(longestPalindrome('gvesfcvergeragacfafergaesottoawfaewfew'))