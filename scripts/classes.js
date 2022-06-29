'use strict';

// Stack

class Stack { // initialising Stack class     
  
  constructor () {
    this.storage = {}; 
    this.length = 0; 
  }
  // push
  push (value) {
    this.storage[this.length]=value;
    this.length++; 
    return true;
  }
  //pop
  pop () {
    if (!this.storage[this.length-1]) return null;
    const popped=this.storage[this.length-1];
    delete this.storage[this.length-1];
    this.length--;
    return popped; 
  }
  //size
  size () {
    return this.length;
  }

}

//Queue

class Queue {
  constructor () {
    this.storage = {};
    this.qLength = 0;
    this.ticketNumber = 0;
  }
  //enqueue
  enqueue (value) {
    this.storage[this.ticketNumber]=value;
    this.ticketNumber++;
    this.qLength++;
    return true;
  }
  //dequeue
  dequeue () {
    if (!this.qLength) return null;
    const removed=this.storage[this.ticketNumber-this.qLength];
    delete this.storage[this.ticketNumber-this.qLength];
    this.qLength--;
    return removed;
  }
  //size
  size () {
    return this.qLength;
  }
}

// Linked list

class Node {
  constructor (value) {
    this.value=value;
    this.next=null;
    //this.previous=null; //! required for Double Linked List
  }
}

class LinkedList {
  constructor () {
    this.head=null;
    this.tail=null;
  }
  //add to head
  addToHead (value) {
    const node=new Node (value);
    if (!this.head) this.head=this.tail=node; // if no head, assign new node as head
    else {
      node.next=this.head; // else next value of node becomes current head
      this.head=node; //new node replaces current head
    }
    return true;
  }
  //add to tail
  addToTail (value) {
    const node=new Node (value);
    if (!this.head) this.tail=this.head=node; // if no head, addign new node as head
    else {
      let currentNode=this.head; 
      while (currentNode.next) { 
        currentNode=currentNode.next; // search through list until we find the tail 
      }
      currentNode.next=node;
      this.tail=node;
    }
    return true;
  }
  //remove head
  removeHead () {
    if (!this.head) return null;
    const beheaded=this.head;
    this.head=this.head.next;
    return beheaded;
  }
  //contains  
  contains (value) {
    let currentNode=this.head;
    while (currentNode) {
      if (currentNode.value===value) return true;
      currentNode=currentNode.next;
    }
    return false;
  }
}

class DoubleLinkedList extends LinkedList {
  constructor () {
    super();
  }
  //add to head
  addToHead (value) {
    const oldHead=this.head;
    super.addToHead(value);
    if (oldHead) oldHead.previous=this.head;
    return true;
  }
  //add to tail
  addToTail (value) {
    const oldTail=this.tail;
    super.addToTail(value);
    if (oldTail) this.tail.previous=oldTail;
    return true;
  }
  //remove head
  removeHead () {
    const beHeaded=super.removeHead();
    if (this.head) this.head.previous=null;
    return beHeaded;
  }
  //contains
  contains (value) {
    return super.contains(value);
  }
  removeTail () {
    if (!this.tail) return null;
    const deTail=this.tail;
    if (this.tail.previous) {
      this.tail=this.tail.previous;
      this.tail.next=null;
    }
    else this.tail=this.head=null;
    return deTail;
  }
}


//double linked list with same functionality plus remove tail



module.exports = {
  Stack,
  Queue,
  LinkedList,
  DoubleLinkedList,
};




// Stack.prototype.push = function (value) { // add "push" method to Stack class
//   this.storage[this.length] = value; // add value at current "top" length
//   this.length++;
//   return true;
// };

// Stack.prototype.pop = function () { // add "pop" method to Stack class
//   if (this.length === 0) return null;
//   let deleted = this.storage[this.length - 1]; 
//   delete this.storage[this.length - 1]; // remove "top" value
//   this.length--;
//   return deleted;
// };

// Stack.prototype.size = function () {
//   return this.length;
// };


// Queue.prototype.enqueue = function (value) {
//   // adding a value to the back of the data structure (queue)
//   this.storage[this.ticketNumber] = value; // assigning value to number key in storage
//   this.qlength++; // updating the length of the queue
//   this.ticketNumber++; // updating the current "ticket number" of person entering queue. This value is never reset
//   return true;
// };

// Queue.prototype.dequeue = function () {
//   // removing & returning the value at the front of the queue.
//   if (this.qlength === 0) return null; // returning null if queue empty
//   let removed = this.storage[this.ticketNumber - this.qlength]; // storing oldest queue entry
//   delete this.storage[this.ticketNumber - this.qlength]; // deleting oldest queue entry
//   this.qlength--; // updating the length
//   return removed; // returning the oldest entry
// };

// Queue.prototype.size = function () {
//   return this.qlength;
// };



// function LinkedList () { //create linked list class
//   this.head = null;
//   this.length = 0;
// }


// function Node (value) { //create node class to be use in "add" functions
//   this.value=value;
//   this.next=null;
//   this.previous = null;
//}


// LinkedList.prototype.addToHead= function (value) {
//   let newNode=new Node(value); // create a new node
//   if (!this.head) { // if there is no head value, assign new node to head and tail  
//     this.head = newNode; 
//     this.tail = newNode;
//   } else {
//     newNode.next = this.head; // new node points to old head
//     this.head = newNode; // new node becomes new head
//   }
//   this.length++;
//   return true;
// };

// LinkedList.prototype.addToTail= function (value) {
//   let newNode=new Node(value); // create a new node
//   if (!this.head) { // if there is no head value, assign new node to it
//     this.head=newNode; 
//     this.tail=newNode;
//   } else {
//     this.tail.next=newNode; //old tail points to new node
//     this.tail=newNode; // new node becomes new tail
//   }
//   this.length++;
//   return true;
// };

// LinkedList.prototype.removeHead= function () {

//   if (this.head === null) return null;
//   else {
//     const temp = this.head; // store the object at the head pointer

//     if (this.head.next) { // if there is a next (ie. more than one item in list)
//       this.head = this.head.next;
//       this.head.previous=null;
//     }
//     else this.head=null; // else, if what we removed was the only item in the list

//     return temp; // return the previous head
//   }
// };

// LinkedList.prototype.contains= function (value) {
  
//   let currentNodeToCheck = this.head; // assign this.head to temp variable
//   while (currentNodeToCheck!==null) { // while we are not at the end of the list
//     if (currentNodeToCheck.value==value) return true; // check if node contains value
//     currentNodeToCheck = currentNodeToCheck.next; // reasign variable to next node
//   }
//   return false;
// };



// class DoubleLinkedList extends LinkedList { // how to add "countains" to this?? check master solution
//   constructor () {
//     super();
//   }

//   addToHead (value) { // super.addToHead() will do most of this.
    
//     let newNode=new Node(value); // create a new node
//     if (!this.head) {
//       this.head=newNode; // if there is no head value, assign new node to it
//       this.tail=newNode;
//     } else {
//       newNode.next=this.head; // new node points to old head
//       this.head.previous=newNode; // assign old head's previous to newNode
//       this.head = newNode; // new node becomes new head
//     }
//     //console.log(this);
//     this.length++;
//     return true;
//   }
//   addToTail (value) {
//     let newNode=new Node(value); // create a new node
//     if (!this.head) {
//       this.head=newNode; // if there is no head value, assign new node to it
//       this.tail=newNode;
//     } else {
//       // tail property of linkedlist should point to new node
//       // previous tail.next property should also point to new node.
//       this.tail.next=newNode;
//       newNode.previous=this.tail;
//       this.tail=newNode;
//     }
//     this.length++;
//     return true;
//   }
//   removeHead () {

//     if (this.head === null) return null;
//     else {
//       // store the object at the head pointer
//       const temp = this.head;
//       // make the .next object the new head
//       if (this.head.next) {
//         this.head = this.head.next;
//         this.head.previous=null;
//       }
//       else this.head=null;

//       // return the previous head
//       return temp;
//     }
//   }
//   removeTail () {

//     if (this.tail === null) return null;
//     else {
//       const temp=this.tail;

//       if (this.tail.previous) { // or this.head.next
//         this.tail=this.tail.previous;
//         this.tail.next=null;
//       }
//       else this.tail=null;

//       return temp;
//     }
//   }
// }