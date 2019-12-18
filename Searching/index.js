//Algorithms: Searching / Traversal

// linear search: sequential search, finding target within list. O(n). slow, is there a better way? (yes, if data is sorted)

var beasts = ['centaur', 'godzilla', 'mosura', 'hydra', 'nessie'];

beasts.indexOf('godzilla'); // => 1

beasts.findIndex(function(item){
  return item === 'godzilla';
}); // => 1

beasts.find(function(item){
  return item === 'godzilla';
}); // => godzilla

beasts.includes('godzilla'); // => true

//------------------------------------

// binary search: if data is sorted we can discard half of list to find target item until we locate item. if its sorted we can do better than O(n). creates binary search tree, even though we are creating a new data structure, sorting them gives better performance for searching. divide and conquer approach O(log n)

//------------------------------------

//Traversal go from node to node to find a certain item, or map over (visit) each item and update information.

//BFS (Breadth) & DFS (Depth) First Search/ (Traversal)

// Trees & Graphs are used because they maintain order (unlike hashes) and are faster O(log n) (than arrays O(n))

// Breadth First Search: move left to right for each level of the tree. root, then children, then grandchildren, so on. uses additional memory to keep track of all nodes and all their child nodes

//     9
//  4     20
//1  6  15  170

let BFS = [9, 4, 20, 1, 6, 15, 170]

// Depth First Search: search follows one branch of the tree all the way down to target or youngest child/end of branch. lower memory requirement (no need to store all child pointers). go as deep as possible starting at left most branch and moving toward the right

let DFS = [9, 4, 1, 6, 20, 15, 170]

// all traversal is O(n), walk through tree w/o repeating ourselves (visiting same node twice)

// BFS
// (+) shortest path
// (+) closer nodes (closest nodes to root searched first)
// (-) more memory (store all child nodes references)
// if you have additional info on target node location (and it is close to root) => use BFS

// DFS
// (+) less memory
// (+) does path exist?
// (-) can get slow (if very deep)
// if you have additional info on target node location (and it is close to bottom) => use DFS

//------------------------------------

//https://stackoverflow.com/questions/9844193/what-is-the-time-and-space-complexity-of-a-breadth-first-and-depth-first-tree-tr

// BFS:
// Time complexity is O(|V|) where |V| is the number of nodes,you need to traverse all nodes.
// Space complecity is O(|V|) as well - since at worst case you need to hold all vertices in the queue.

// DFS:
// Time complexity is again O(|V|), you need to traverse all nodes.
// Space complexity - depends on the implementation, a recursive implementation can have a O(h) space complexity [worst case], where h is the maximal depth of your tree.
// Using an iterative solution with a stack is actually the same as BFS, just using a stack instead of a queue - so you get both O(|V|) time and space complexity.

// (*) Note that the space complexity and time complexity is a bit different for a tree then for a general graphs becase you do not need to maintain a visited set for a tree, and |E| = O(|V|), so the |E| factor is actually redundant.

//------------------------------------
//Interview Q's:

//If you know a solution is not far from the root of the tree: Breadth

//If the tree is very deep and solutions are rare: Breadth (Depth will take too long)

//If the tree is very wide: Depth (Breadth will take too much memory)

//If solutions are frequent but located deep in the tree: Depth

//Determining whether a path exists between two nodes: Depth

//Finding the shortest path: Breadth

//------------------------------------

//Breadth First Search/Traversal

class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true){
        if(value < currentNode.value){
          //Left
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if(!currentNode.right){
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value){
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while(currentNode){
      if(value < currentNode.value){
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return null
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
  breadthFirstSearch() {
    let currentNode = this.root;
    let list = []; //BFS order
    let queue = []; //holds references for children nodes and can get very large
    queue.push(currentNode);

    while(queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if(currentNode.left) {
        queue.push(currentNode.left);
      }
      if(currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }
  breadthFirstSearchR(queue, list) {
    if (!queue.length) {
      return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.value);
    if(currentNode.left) {
      queue.push(currentNode.left);
    }
    if(currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.breadthFirstSearchR(queue, list);
  }
  DFSInOrder() {
    return traverseInOrder(this.root, []);
  }
  DFSPreOrder() {
    return traversePreOrder(this.root, []);
  }
  DFSPostOrder() {
    return traversePostOrder(this.root, []);
  }
}

function traverseInOrder(node, list) {
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value)
  if (node.right) {
    traverseInOrder(node.right, list)
  }
  return list;
}

function traversePreOrder(node, list) {
  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list)
  }
  return list;
}

function traversePostOrder(node, list) {
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list)
  }
  list.push(node.value);
  return list;
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.breadthFirstSearch();
tree.breadthFirstSearchR([tree.root], []);

//Depth First Search/Traversal (3 types). height of tree will be amount of memory taken up, (longest/deepest branch)

tree.DFSInOrder(); //[1, 4, 6, 9, 15, 20, 170];
tree.DFSPreOrder(); //[9, 4, 1, 6, 20, 15, 170];
tree.DFSPostOrder(); // [1, 6, 4, 15, 170, 20, 9];

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

let balanceBST = 'https://leetcode.com/problems/validate-binary-search-tree/'

//------------------------------------

//Graph Traversal: same as tree traversal since a tree is a type of graph
// BFS: shortest path?
// DFS: does path exist?

//BFS... https://medium.com/basecs/finding-the-shortest-path-with-a-little-help-from-dijkstra-613149fbdc8e
// Bellman-Ford (effective, takes into account negative weights, O(n^2)) or Dijkstra (more efficient, does not account for negative weights) = shortest path problem or weighted graph
