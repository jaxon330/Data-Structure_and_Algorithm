//* undirected path
/*
Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). 
The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.
*/

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);  // helper function to build graph from edges
    return hasPath(graph, nodeA, nodeB, new Set()) // adding Set() to avoid infinite loop
  };
  
  const hasPath = (graph, src, dest, visited) => {
    if(src === dest) return true;
    if(visited.has(src)) return false;
    
    visited.add(src)
    
    for(let neighbor of graph[src]) {
      if (hasPath(graph, neighbor, dest, visited) === true) {
        return true;
      }
    }
    return false;
  };     
  
  const buildGraph = (edges) => {
    const graph = {};
    
    for(let edge of edges) { // iterating through each edge
      const [ a, b ] = edge; // I know a single edge would be a pair, so that's why I am desctructuring edge
      if (!(a in graph)) graph[a] = []; // if a is not in graph, i initialize it in the graph 
      if (!(b in graph)) graph[b] = []; // if b is not in graph, i initialize it in the graph 
      graph[a].push(b); // creating neighbor
      graph[b].push(a);
    }
    
    return graph;
  }
    
  
// output of buildGraph
  // const graph = {
  //   i: ['j', 'k'],
  //   j: ['i'],
  //   k: ['i', 'm', 'l'],
  //   m: ['k'],
  //   l: ['k'],
  //   o: ['n'],
  //   n: ['o']
  // }
  
  undirectedPath(edges, 'j', 'm'); // -> true