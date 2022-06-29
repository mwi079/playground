'use strict';


class Set {
  constructor () {
    this.storage={};
  }
  //add
  add (value) {
    this.storage[value]=value;
    return true;
  } 
  //contains
  contains (value) {
    if (this.storage[value]) return true;
    return false;
  }
  //remove
  remove (value) {
    if (this.storage[value]) delete this.storage[value];
    return true;
  }
}




































// function Set (name) {
//   this.name = name;
//   this.storage = {};
// }

// Set.prototype.contains= function (value) {
//   return (value in this.storage);
// };
                      
// Set.prototype.add= function (value) {
//   if (!this.contains(value)) this.storage[value]=value; // could be this.storage[value]=true
//   return true;
// };

// Set.prototype.remove= function (value) {
//   if (this.contains(value)) delete this.storage[value];//delete operation always return true
//   return true;
// };























// Set.prototype.belongsTo = function (value, ...sets) {
//   let outputStr = `The value '${value}' belongs to `;
//   if (this.contains(value)) outputStr += this.name;
//   sets.forEach((altSet) => {
//     if (altSet.contains(value)) outputStr += this.name;
//   });
// };

// Set.prototype.intersection = function (...sets) {
//   let sharedVals = []; // initialise output list
//   let cache = {}; // initialise temporary cache to store values and counts
//   sets.push(this); // add this to array of sets to be checked
//   let requiredAmount = sets.length; // minimum number of value count is number of sets

//   sets.forEach((eachSet) => {
//     for (const key in eachSet.storage) {
//       if (!cache[key]) {
//         cache[key] = 1;
//       } else {
//         cache[key]++;
//       }
//     }
//   });

//   for (const value in cache) {
//     if (cache[value] === requiredAmount) sharedVals.push(value);
//   }

//   return sharedVals;
// };

// const Set1 = new Set('integers'); 

// Set1.add(1);
// Set1.add(2);
// Set1.add(3);
// Set1.add(5);



// const Set2 = new Set('surds'); 

// Set2.add(3);
// Set2.add(4);
// Set2.add(5);

// //console.log(Set2.belongsTo(1,Set1));

// //console.log(Set1.intersection(Set2));

// // mySet = new Set(1, 2, 3, 3);
// // [1,2,3];

module.exports = Set;
