import Digraph from "../Graphs/Digraph";
import Vertex from "../Graphs/Vertex";

class DepthFirstSearch {
  private marked: boolean[];
  private countV: number;
  private G: Digraph;
  private source: number;
  private fn: (vertex: Vertex, idx: number) => void;

  constructor(
    G: Digraph,
    source: number,
    fn: (vertex: Vertex, idx: number) => void
  ) {
    if (source < 0 || source >= G.V()) {
      throw new Error("Invalid source index");
    }
    this.G = G;
    this.countV = 0;
    this.marked = new Array<boolean>(G.V());
    this.fn = fn;
    this.source = source;
    this.dfs(this.G, this.source);
  }

  // take a function that takes as input the vertex
  private dfs(G: Digraph, vertexIdx: number) {
    this.marked[vertexIdx] = true;
    this.countV++;
    this.fn(G.getVertex(vertexIdx), vertexIdx);
    //console.log("visiting vertex with index", vertexIdx);

    for (let w of this.G.adj(vertexIdx)) {
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

export default DepthFirstSearch;
