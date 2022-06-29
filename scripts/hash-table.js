'use strict';


const helpers = require('./hash-table-helpers');

const Storage = helpers.Storage;
const hash = helpers.hash;


class HashTable {
  constructor (size) {
    this.size = size;
    this.storage = Storage(size);
    this.used=0;
  }
  //insert
  insert (key, value) {
    const hashed=hash(key,this.size); //hashed key to find our index
    let head=this.storage.get(hashed); // location of our index
    const node= {key, value, next:null}; // new node to be added
    
    if (!head) head=node; // if there is no head at location, make it our node
    else {
      node.next=head; //else, old head next value of our new head 
      head=node; // make our node the new head
    }
    this.storage.set(hashed,head); // storge head at hashed index location
    this.used++; // to keep track for //!resizing
    this.checkSize();
    return true;
  }
  //retrieve
  retrieve (key) {
    const hashed=hash(key,this.size); // hashed key to find our index
    let head=this.storage.get(hashed); // location of our index
    
    while (head) { // if there is something there enter while loop
      if (head.key===key) return head.value; // if this is our key, return the value
      head=head.next; //else, check the next one
    }
    return undefined; //
  }
  //remove
  remove (key) {

    const hashed=hash(key,this.size); // hashed key to find our index
    let head=this.storage.get(hashed); // location of our index
    //console.log(head)
    if (!head) return false; // if there is no head 

    if (head.key===key) { // if the key is on the head
      this.storage.set(hashed,head.next); // if head is being replaced, need to reset storage 
      this.used--; //! resizing
      this.checkSize();
      return true;
    }

    while (head.next) {
      if (head.next.key===key) {
        head.next=head.next.next; // bypass node to be moved.
        this.used--; //! resizing
        this.checkSize();
        return true;
      }
      head=head.next;
    }
    return false;
  }
  // check size
  checkSize () {
    const ratio=(this.used/this.size);

    if (ratio <=0.25) {
      this.resize(this.size/2);
    }
    else if (ratio >=0.75) {
      this.resize(this.size*2);
    }

  }
  // resize
  resize (newSize) {

    const temp={
      size : newSize,
      storage : Storage(newSize),
      used:0,
      checkSize: function () {}
    };

    for (let i=0; i<this.size; i++) {
      let node=this.storage.get(i);
      while (node) {
        this.insert.call(temp,node.key,node.value);
        node=node.next;
      }
    }

    this.size=temp.size;
    this.storage=temp.storage;
    this.used=temp.used;
    
  }
}

module.exports = HashTable;


































// // These are your helpers, they're used to generate
// // the storage and get the hash respectively. For more
// // information check the "hash-table-helpers.js" file.

// const Storage = helpers.Storage;
// const hash = helpers.hash;

// function HashTable (size) {
//   this.size = size;
//   this.storage = Storage(this.size); //! pointer to storage giving us access
//   this.nodes=0;
//   //this.resizing=false; 
// }

// HashTable.prototype.insert = function (key, value) {
//   // const nodeAmount = this.nodes + 1;
//   // console.log('size= ',this.size)
//   // console.log('nodes= ',this.nodes)

//   // use hash function to get index from key
//   const hashedIndex=hash(key,this.size); // hashedIndex is number
  
//   let linkedlist = this.storage.get(hashedIndex);
  
//   if (!(linkedlist)) linkedlist= new LinkedList(); 
//   else {
//     let tempHead = linkedlist.head; // set currentNode (tempHead) to the first element in linked list.
//     while (tempHead) { // while the currentNode is not null
//       if (tempHead.key === key) { // if the key already exists
//         tempHead.value = value; // update the associated value
//         return true; // return true as it has been updated
//       }
//       else tempHead = tempHead.next; // reassign temphead to the nextNode in the linked list
//     }
//   }
//   // linkedlist.value = value, .next = previoushead, 
//   linkedlist.addToHead(value, key); // add the value to the head of the list
  
//   this.storage.set(hashedIndex,linkedlist); // set the storage[hashedIndex] to the updated linkedlist
  
//   //console.log('on insert call', linkedlist);
  
//   this.resize(); //! resizing --if (!this.resizing) 
//   this.nodes++;
//   return true;

// };


// HashTable.prototype.retrieve = function (key) {
//   // use hash function to get index from key
//   const hashedIndex=hash(key,this.size);

//   // check if value stored at index in storage
//   let linkedlist = this.storage.get(hashedIndex);
  
  
//   // storage.get to get the value at key in storage
//   if (!(linkedlist)) return undefined;
//   else {
//     // if the storage[hashedIndex] contains the key in the list itself
//     let tempHead = linkedlist.head;
//     while (tempHead) {
//       // console.log(tempHead.key);
//       if (tempHead.key === key) return tempHead.value; 
//       tempHead = tempHead.next;
//     }
//   }
//   return undefined;
// };

// // REMOVE FUNCTION
// HashTable.prototype.remove = function (key) {

//   // console.log('REMOVE size= ',this.size)
//   // console.log('REMOVE nodes= ',this.nodes)
  
//   // use hash function to get index from key
//   let hashedIndex=hash(key,this.size);

//   // check if value exists at key in storage, return false if not.
//   let linkedlist = this.storage.get(hashedIndex);

//   if (!linkedlist) return false;
  
//   // if key is in first item in list, and item has no other items, then set storage to undefined
//   if (linkedlist.head.next === null && linkedlist.head.key === key) {
//     this.storage.set(hashedIndex,undefined);
//     this.nodes--;
//     this.resize(); //! RESIZE---if (!this.resizing) 
//     return true;
//   }
  
//   // iterate through each linkedlist.next from the head, remove node if key found.
//   let tempNode = linkedlist.head;
//   let previous=linkedlist.head;
  
//   while (tempNode) {
//     if (tempNode.key === key) {
//       // this.storage.set(hashedIndex, tempNode.next); 
//       if (tempNode.next===null) previous.next=null;
//       else previous.next=tempNode.next; // this.storage.set(linkedlist);
      
//       this.nodes--;
//       this.resize(); //! RESIZE --if (!this.resizing)
//       // this.storage.set(hashedIndex, linkedlist);
//       return true;
//     }
//     previous= tempNode;
//     tempNode = tempNode.next;
//   }
  
//   // return true if value is found.
//   return false;
// };

// HashTable.prototype.needsResize= function () {

//   if (this.nodes/this.size<=0.25 || this.nodes/this.size>=0.75) {
//     return true;
//   }
//   return false;
// };

// HashTable.prototype.resize =function () {
//   //this.resizing=true; //!bool = false
//   //const nodes=this.nodes;
//   if (this.nodes === 0) return;

//   //? if storage is less than 25% full
//   if (this.nodes/this.size<=0.25) {
    
//     // create a new divisor based on size.
//     // const howFull = this.nodes/this.size;
//     // const resizeRatio = (1 / howFull) / 2; 
//     // set the new hashtable size to current size / number (more than 1 -);
//     //this.size=Math.round(this.size/resizeRatio);
//     const previousSize = this.size;
//     this.size=Math.round(this.size/2);

//     // store the current contents of storage in an array.
//     const oldData=[];

//     for (let i = 0; i < previousSize; i++) {
//       oldData.push(this.storage.get(i));
//     }

//     // set the storage to be a new size (for checks in helper functions)
//     this.storage= Storage(this.size);

//     // loop through old data, adding each item in the linked list to new storage.
//     oldData.forEach((linkedList) => {
//       let currentNode=linkedList.head;
//       // loop through each item in linked list, inserting value into storage.
//       while (currentNode) {
//         const key=currentNode.key;
//         const value=currentNode.value;
//         this.insert(key,value);
//         this.nodes--;
//         currentNode=currentNode.next;
//       }
//     }); 
//   }
//   // if storage
//   else if (this.nodes/this.size>=0.75) {
//     const previousSize = this.size;
//     //make bigger
    
//     // console.log('resize ratio =', resizeRatio);
//     this.size=Math.round(this.size*2);

//     const oldData=[];
//     for (let i = 0; i < previousSize; i++) {
//       oldData.push(this.storage.get(i));
//     }

//     this.storage= Storage(this.size);

//     oldData.forEach((linkedList) => {
//       let currentNode=linkedList.head;
//       while (currentNode) {
//         const key=currentNode.key;
//         const value=currentNode.value;
//         this.insert(key,value);
//         this.nodes--;
//         currentNode=currentNode.next;
//       }
//     });
//   }
//   //this.resizing=false; //!bool = true
//   //this.nodes=nodes;
// };


// // ---LINKED LIST CLASSES ---
// function Node (value, key) {
//   this.value=value;
//   this.key = key;
//   this.next=null;
// }

// function LinkedList () {

//   this.head = null;
//   this.tail = { next: null };
//   this.length = 0;
// }

// LinkedList.prototype.addToHead= function (value, key) {
//   const newNode=new Node(value, key); // create a new node
//   if (!this.head) {
//     this.head=newNode; // if there is no head value, assign new node to it
//     this.tail=newNode;
//   } else {
//     newNode.next=this.head; // new node points to old head
//     this.head = newNode; // new node becomes new head
//   }
//   this.length++;
//   return true;
// };


