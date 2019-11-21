//Linked Lists
//Doubly: links to the node before it

//node contains pointers for next and previous nodes

//can go forwards and backwards
//searching can be more efficient: lookup can be O(n/2) -> O(n)

//uses more memory

//------------------------

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next:  null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
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
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index-1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
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

const myLL = new DoublyLinkedList(10);
myLL.append(5);
myLL.append(16);
myLL.prepend(1);
myLL.insert(1, 99);
myLL.remove(2);

//Singly VS Doubly

// Singly:
// + simple, less memory, delete&insert is faster
// - can not be traversed in reverse
// when you have less memory
// fast insertion & deletion, not much searching

// Doubly
// + traversed forward & backward, delete previous node is faster
// - complex, requires more memory/storage because of prev property, extra operations needed for insert & delete
// use when no memory limitation
// good operation for searching (backwards & forwards)

//common interview Q: reverse linked list
