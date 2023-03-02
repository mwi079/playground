function josephus(items,k){
  let position=-1;
  const result=[];
  while(items.length){
    if(items.length===1){
      result.push(items.splice(position,1)[0])
      console.log(result)
      return result;
    }
    position=newPosition(position+k,items.length)
   
    result.push(items.splice(position,1)[0])
    if(position!==0){
      position--;
    }
    else if (position===0 &&items.length>1){
      position=items.length-1;
    }
  }
  return result;
}

function newPosition(move, length){
    return move%length;
}

josephus(["C","o","d","e","W","a","r","s"],4)

//! ['e', 's', 'W', 'o', 'C', 'd', 'r', 'a']

