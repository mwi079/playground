'use strict';

class Tree {
  constructor (value) {
    this.value=value;
    this.children=[];
  }
  //add child
  addChild (node) {
    this.children.push(node);
    return true;
  }
  //contains
  // contains (value) { //! Depth via recusrion 

  //   if (this.value===value) return true;

  //   for (const child of this.children) {
  //     if (child.contains(value)) return true;
  //   }
  //   return false;
  // }

  // contains (value) { //! Depth via while loop and stack;

  //   const stack=[];
  //   let current;
  //   let children;

  //   stack.push(this);

  //   while (stack.length>0) {
  //     current=stack.pop();
  //     if (current.value===value) return true;
  //     else { 
  //       children=current.children;
  //       for (let i=0; i<children.length; i++) {
  //         stack.push(children[i]);
  //       }
  //     }
  //   }
  //   return false;
  // }

  contains (value) { //! Breadth via while loop and queue;

    const queue=[];
    let current;
    let children;

    queue.push(this);

    while (queue.length>0) {
      current=queue.shift();
      //console.log(current.value)
      if (current.value===value) return true;
      else { 
        children=current.children;
        for (let i=0; i<children.length; i++) {
          queue.push(children[i]);
        }
      }
    }
    return false;
  }

}





































// function Tree (value) {
  
//   this.value = value;
//   this.children = [];
//   // return this
// }

// // const tree = new Tree('hello');
// // tree -> { value: 'hello', children: null};

// Tree.prototype.addChild = function (node) {
//   // this.children = null then add new tree in children
//   this.children.push(node);
//   return true;
// };

// Tree.prototype.contains = function (value) {
  
//   // if currentNode has value and matches argument return true;
//   if (this.value === value) return true;

//   // checking each child of the currentNode. Searching by "depth" rather than "breadth"
//   for (const child of this.children) {
//     if (child.contains(value)) return true;
//   }
//   return false;

// --FOR LOOP--
// for(let i = 0; i < this.children.length; i++) {
//   if (children[i].contains(value)) return true; // calls contains function against the context of the first "child"
// }
// return false

// // --STACK--
// let stack = [];
// stack.push(this.children);
// stack.push(this.value);

// // stack -> [1, [trees]]
// while (stack.length) {
//   let currentVal = stack.pop();
//   if (currentVal === value) return true;
//   else {
//     let childrenOnStack= stack.pop()
//     childrenOnStack.forEach(function (childStackItem) {
//       stack.push(childStackItem);
//       // stack -> [2,3,4,[children]]
//     });
//   }
// }

//};

module.exports = Tree;
