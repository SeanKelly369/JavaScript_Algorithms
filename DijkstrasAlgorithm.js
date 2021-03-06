// Dijkstra's Algorithm

class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push( {val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority = b.priority);
  };
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []; 
  }
  // Link up vertices(nodes) with a weight to create an edge
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({node:vertex2, weight});
    this.adjacencyList[vertex2].push({node:vertex1, weight});
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue(); // The priority queue in this example is quite slow
    const distances = {};
    const previous = {};
    let path = []; // to return at end
    let smallest;
    // build up initial state
    for(let vertex in this.adjacencyList) {
      // if node is at the beginning the distance is 0
      if(vertex === start){
          distances[vertex] = 0;
          nodes.enqueue(vertex, 0);
      } else {
          distances[vertex] = Infinity; // initially set other distances to infinity
          nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // As long as there is something to visit
    while(nodes.values.length){
      smallest = nodes.dequeue().val;
      // console.log("smallest is " + smallest);
      if(smallest === finish){
        // We are done
        // build up path to return at end
        while(previous[smallest]){
          path.push(smallest);
          smallest = previous[smallest];
        } 
        break;
        console.log(smallest);
      }
      if(smallest || distances[smallest] !== Infinity){
        for(let neighbour in  this.adjacencyList[smallest]) {
          // find neighbouring node
          let nextNode = this.adjacencyList[smallest][neighbour];
          console.log(nextNode);
          // console.log(this.adjacencyList);
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbour = nextNode.node;
          if(candidate < distances[nextNeighbour]){

            // Updating new smallest distance to neighbour
            distances[nextNeighbour] = candidate;

            // Updating previous - How we got to neighbour
            previous[nextNeighbour] = smallest;

            // Enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbour, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("Hello world");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);
graph.addEdge("Hello world", "D", 8);

graph.Dijkstra("A", "Hello world");
