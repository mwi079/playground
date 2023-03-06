const isAnagram = function(s, t) {
    if(s.length!==t.length) return false;
    const sSorted=s.split('').sort((x,y)=>x>y?-1:1)
    const tSorted=t.split('').sort((x,y)=>x>y?-1:1)
    return isValidAnagram(sSorted,tSorted);
};

function isValidAnagram(array1, array2){
    for (let i=0; i<array1.length; i++){
        if(array1[i]!==array2[i]) return false;
    }
    return true;
}