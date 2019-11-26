// Graphs: useful & most used when modeling real life
// set of values related in pairwise fashion

// each item is node/vertex
// connected with edges
// network/relationships/connections

// Trees are a type of graph (linked lists are a type of tree, therefore a type of graph)

// Directed V Undirected
// Directed: one way
// Undirected: back/forth
// traffic flow, system of movement is not bydirectional

// Unweighted V Weighted
// nodes have any value (type of data)
// edges can also have value(weight)
//ex: calculate optimal path

// Cyclic V Acyclic
// Cyclic: cycle/circle
// Acyclic: one way travel

//Directed Acyclic Graph (DAG)

//Edge List
const graph = [[0,2],[2,3],[2,1],[1,3]]

//Adjacent List
const graphh = [[2],[2,3],[0,1,3],[1,2]]

//Adjacent Matrix
//0 = not connected
//1 = connected
const graphhh = [
  [0,0,1,0], //0
  [0,0,1,1], //1
  [1,1,0,1], //2
  [0,1,1,0]  //3
]

//-----------------------------------

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {
    };
  }
  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }
  addEdge(node1, node2) {
    //undirected Graph
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
}
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

myGraph.showConnections();
//Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5

// hard to measure big O due to variety/complexity of graphs

// (+) Relationships
// (-) Scaling is hard
