// Linked Lists: list that is linked, set of nodes (each has a value, and a pointer)
// first node: head
// last node: tail

// Single and Double linked lists

// null terminated: end of list
// tail node points to null

// simple data structure, all data types

// REVIEW:
//doesnt come prebuilt in most languages
//lowlevel data structures
//fundamental
//popular interview Q

// +fast insertion
// +fast deletionc
// +ordered
// +flexible size

// -slow lookup
// -more memory

const basket = ['apples', 'grapes', 'pears'];

// linked list: apples --> grapes --> pears

/*
apples
8947 --> grapes
(memory) 8742 --> pears
        (memory)   372 --> null
                  (memory)
*/

// does not come with JS

//  prepend O(1)
//  append O(1)
//  lookup O(n)
//  insert O(n)
//  delete O(n)

// Pointer: reference to another place (or object or node) in memory
// garbage collection: memory is managed automatically

let obj1 = { a: true };
let obj2 = obj1;
obj1.a = 'booya';
delete obj1;

// 1-->10-->99-->5-->16

let myLL = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null
      }
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  preprend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next
    }
    return arr;
  }
  insert(index, value) {
    //check params
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    //check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    //check params
    const leader = this.traverseToIndex(index-1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
}


const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.preprend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(200, 88);
myLinkedList.remove(2);
