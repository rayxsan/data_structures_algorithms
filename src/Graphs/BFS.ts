import Digraph from "../Graphs/Digraph";
import Queue from "../Queues/Queue";
import Stack from "../Stacks/Stack";

class BreadthFirstSearch {
  private marked: boolean[];
  private edgeTo: number[];
  private G: Digraph;
  private s: number;
  //private fn: (idx: number) => void;

  constructor(G: Digraph, source: number) {
    if (source < 0 || source >= G.V()) {
      throw new Error("Invalid source index");
    }
    this.G = G;
    this.marked = new Array<boolean>(G.V());
    for (let i = 0; i < G.V(); i++) {
      this.marked[i] = false;
    }
    this.edgeTo = new Array<number>(G.V());
    //this.fn = fn;
    this.s = source;
    this.bfs(this.G, this.s);
  }

  private bfs(G: Digraph, vertexIdx: number) {
    let q = new Queue<number>();
    this.marked[vertexIdx] = true;
    q.enqueue(vertexIdx);

    while (!q.isEmpty()) {
      const v = q.dequeue();

      for (let w of G.adj(vertexIdx)) {
        if (!this.marked[w]) {
          this.edgeTo[w] = v;
          this.marked[w] = true;
          q.enqueue(w);
        }
      }
    }
  }

  hasPathTo(idx: number): boolean {
    if (idx < 0 || idx >= this.G.V()) {
      throw new Error("Invalid index");
    }
    return this.marked[idx];
  }

  pathTo(idx: number) {
    if (!this.hasPathTo(idx)) return null;
    let path = new Stack<number>();
    for (let x = idx; x != this.s; x = this.edgeTo[x]) {
      path.push(x);
    }
    path.push(this.s);
    return path;
  }
}
export default BreadthFirstSearch;
