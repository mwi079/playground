function isPalindrome(s){
    if(s===s.split('').reverse().join(''))return true
    return false
}

console.log(isPalindrome('3'))