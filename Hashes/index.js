// Hash Tables
// key value pairs
// dictionary (python)
// hash (ruby)
// js (object)

// hash function: that generates a value for each input it receives (very fast) => O(1)
// types:  md5, SHA-1, SHA-256 (overly complex, slow)
// 1 way (cannot 'go back')
// indempotent: same input will always produce same output
// fast data access


// insert O(1)
// lookup O(1)
// delete O(1)
// search O(1)

let user = {
  age:  54,
  name: 'Kylie',
  magic: true,
  scream: function(){
    console.log('ahhh!')
  }
}

user.age // O(1)
user.spell = 'abra kadabra'; // O(1)
// user.scream(); // O(1)

// Hash Collisions: store multiple pieces of data in same memory space (limited memory), becomes linked list
// turns lookup from O(1) to O(n)

// keys can be any data type (not just the most common strings), in JS they get stringyfied

// different types of hash tables:

const a = new Map()
// save any data type as key
// mantains insertion order

const b = new Set()
// only stores keys, no values

// --------------------

class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value])
    return this.data;
  } // O(1)

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    console.log(currentBucket)
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  } // O(1) = no collisions, with them = O(n)

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }

  values() {
    const valuesArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        valuesArray.push(this.data[i][0][1]);
      }
    }
    return valuesArray;
  }

}

const myHashTable = new HashTable(50);
 myHashTable.set('grapes', 10000);
 myHashTable.set('apples', 54);
 myHashTable.set('oranges', 2);
 myHashTable.keys();
 myHashTable.values();

// Hash Table (array hack) since we can choose our keys
// no concept of order though

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//My Solution:
function firstRecurringCharacter1(input) {
  let seen = [];
  seen[0] = input[0];
  for (let i = 1; i < input.length; i++) {
    if (seen.includes(input[i])){
      return input[i];
    } else {
      seen.push(input[i]);
    }
  }
}

//Course Solutions:

//brute force time O(n^2), space O(1)
function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}

//use hash table time O(n), descrease time complexity, increase space complexity since we are creating a new object to keep track of array items.
function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
}

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

// --------------------

// Hash Tables
// can usually optimize code, from O(n^2) to O(n) => always want to avoid giving an O(n^2) in interview
// fast access, usually more memory

// (+)
// fast lookups (good collision resolution needed)
// fast inserts
// flexible keys

// (-)
// unordered
// slow key iteration
