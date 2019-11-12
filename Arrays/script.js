const strings = ['a', 'b', 'c', 'd'];

//4*4 = 16 bytes of storage

strings[2] // O(1)

//push O(1)
strings.push('e');
//can be O(n)

//pop O(1)
strings.pop();
strings.pop();

//unshift O(n)
strings.unshift('x');

//splice O(n)
strings.splice(2, 0, 'alien');

//console.log(strings);

//------------------------------
  //  Classes in JS

  //   Reference Type
  let object1 = { value: 10 };
  let object2 = object1;
  let object3 = { value: 10 };

  //   Context VS Scope: where we are in the object
  //   object's environment
   const object4 = {
     a: function() {
       console.log(this);
     }
   }

   //object4.a()

  //   Instantiation: make a copy and reuse the code
  class Player {
    constructor(name, type) {
      this.name = name;
      this.type = type;
    }
    introduce() {
      console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
  }

  class Wizard extends Player {
    constructor(name, type) {
      super(name, type);
    }
    play() {
      console.log(`WEEE I'm a ${this.type}`)
    }
  }

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Sean', 'Dark Magic');

//How to build:
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }
  shiftItems(index) {
    for (let i = index; i < this.length-1; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }
}

//How to use:
const newArray = new MyArray();
// newArray.push('hi');
// newArray.push('you');
// newArray.push('!');
// newArray.delete(1);
//console.log(newArray);

//Create a function that reverses a string:
//'Hi my name is Laurell' should be:
//'lleruaL si eman ym iH'

function reverse(str) {
  if(!str || str.length < 2 || typeof str !== 'string'){
    return 'hmm that is not good';
  }
  let backwards = []
  for (let i = str.length-1; i = 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join('');
}

function reverse2(str) {
  return str.split('').reverse().join('');
}

const reverse3 = str => [...str].split('').reverse().join('');

function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  if(arr1.length === 0){
    return arr2;
  }
  if(arr2.length === 0){
    return arr1;
  }

  while (arr1Item || arr2Item) {

    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }

  return mergedArray;
}

mergeSortedArrays([0,3,4,31], [4,6,30]);
//[0,3,4,4,6,30,31]
