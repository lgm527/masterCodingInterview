// Trees
// inversed tree root at top and leaves at bottom
// hierarchical
// made up of nodes

// similar to a linked list (technically its a type of tree)

// node can only point to a child
// only one entry point (root)
// dont need to reference parent

// Binary Tree:
// each parent node can only have 0,1,2 child nodes
// each child can only have 1 parent

function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// Perfect Binary Tree; all leaf nodes are full (either has 0 or 2 children)
// bottom layer is filled
// extremely efficient
// 1. number of total nodes doubles as we move down the Tree
// 2. number of nodes on last level = sum of nodes on all other levels + 1 (all levels summed up + 1 = bottom level) means half of data is just the bottom level


// Full Binary Tree: node has either 0 or 2 children (bottom layer is not filled)

// Binary Search Tree
//--> efficient: good!
// lookup O(log N) -> amazing
// insert O(log N)
// delete O(log N)

// (+) better than O(n)
// (+) ordered
// (+) flexible size

// (-) No O(1) operations

// on average arrays & hashes perform better, but are great in certain cases

//----------------------

// Level 0: 2^0 = 1;
// Level 1: 2^1 = 2;
// Level 2: 2^2 = 4;
// Level 3: 2^3 = 8;

// h = height
// # of nodes = 2^h - 1;
// log nodes = steps;

// log 100 = 2
// 10^2 = 100

// balanced O(log N) VS unbalanced operations turn into O(n)
// why unbalanced binary search tree is bad -> turns into a linked list (worst case) and operations become O(n)

//----------------------

class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }
    return false;
  }
remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while(currentNode){
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {

            //if parent > current value, make current left child a child of parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

            //if parent < current value, make left child a right child of parent
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

        //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if(parentNode === null) {
            this.root = currentNode.right;
          } else {

            //if parent > current, make right child of the left the parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

            //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

        //Option 3: Right child that has a left child
        } else {

          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while(leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parentNode === null) {
            this.root = leftmost;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
      return true;
      }
    }
  }
}
//divide & conquer!

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(170);
JSON.stringify(traverse(tree.root));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

//----------------------

//how do you balance a tree? - make sure levels are equal

//Red/Black Tree: color coded to rebalance

// Heap (& Binary Heaps): every node has a greater value than all nodes on the levels below, can be used whenever order is important
// max heap (root is largest)
// min heap (root is smallest)
// left and right children can be any value, just less than parent node
// lookup O(n) complete iteration needed
// insert O(log N)
// delete O(log N)
// great for comparative operations: priority queues
// add order from left to right and bubbles up to reorder
//memory heap != heap data structure

//Binary Heap: left to right insertion (order of insertion), never have to be balanced-will always be balanced
// lookup O(n)
// insert O(log N)
// delete O(log N)
// priority queues: each element has priority and those with higher priority are served before those with less priority

// Binary Heap
// (+) better than O(n)
// (+) Priority
// (+) flexible size
// (+) fast insert

// (-) slow lookup

// Trie: specialized tree used for searching (for text) = prefixed tree, autocompletion based on text written so far
//outperform most data structures depending on type of search being performed
//if a word(or part of a word) exisits in a body of text
// empty root node (start)

// lookup O(length of word) - time
// prefixes save a lot of space

// Review:
// many different types
// the way they work (build one from scratch) will be the interview Q
