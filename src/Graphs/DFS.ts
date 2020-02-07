import Digraph from "../Graphs/Digraph";
import Vertex from "../Graphs/Vertex";

class DepthFirstSearch {
  private marked: boolean[]; //needs to be the same size of the # of vertices in the graph
  private countV: number;
  private G: Digraph;
  private source: number;

  constructor(G: Digraph, source: number) {
    this.G = G;
    this.countV = 0;
    this.marked = new Array<boolean>(G.V());
    // TODO: init array with false values

    this.source = source;
    // TODO: verify that source is a valid index in the graph G
    this.dfs(this.G, this.source);
  }

  // take a function that takes as input the vertex
  private dfs(G: Digraph, vertexIdx: number) {
    this.marked[vertexIdx] = true;
    this.countV++;
    //console.log("visiting vertex with index", vertexIdx);

    for (let w of this.G.adj(vertexIdx)) {
      console.log(w);
      if (!this.marked[w]) {
        this.dfs(G, w);
      }
    }
  }

  markedV(w: number): boolean {
    return this.marked[w];
  }

  count(): number {
    return this.countV;
  }
}

const dig = new Digraph(3);
dig.addEdge(0, 1);
dig.addEdge(1, 2);
dig.addEdge(1, 3);

const dfs = new DepthFirstSearch(dig, 0);
