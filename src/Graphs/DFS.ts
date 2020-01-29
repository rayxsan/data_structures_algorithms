import Digraph from "../Graphs/Digraph";

class DepthFirstSearch {
  private marked: boolean[];
  private countV: number;
  private G: Digraph;

  constructor(G: Digraph, source: number) {
    this.G = G;
    this.countV = 0;
    this.marked = new Array<boolean>(G.V());
  }

  dfs(G: Digraph, v: number) {
    this.marked[v] = true;
    this.countV++;
    for (let w of G.adj(v)) {
      if (!this.marked[w.neighbors()]) {
        this.dfs(G, w.neighbors());
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
